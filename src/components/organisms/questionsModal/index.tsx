import React, { useEffect, useState } from "react"
import QuestionSelect from "../../molecules/questionSelect"
import { getLocalstorageQuestions } from "../../../helpers/localStorage"
import type { IQuestion } from "../../../interfaces/api"
import CustomModal from "../customModal"

interface Props {
	selectedQuestions: IQuestion[]
	setSelectedQuestions: React.Dispatch<React.SetStateAction<IQuestion[]>>
}

const QuestionsModal: React.FC<Props> = ({
	setSelectedQuestions,
	selectedQuestions
}) => {
	const allQuestions = getLocalstorageQuestions()
	const [tempSelectedIds, setTempSelectedIds] = useState<Set<string>>(
		new Set()
	)

	useEffect(() => {
		const initialIds = new Set(selectedQuestions.map((q) => q.id))
		setTempSelectedIds(initialIds)
	}, [selectedQuestions])

	const handleSelect = (checked: boolean, id: string) => {
		setTempSelectedIds((prev) => {
			const updated = new Set(prev)
			if (checked) {
				updated.add(id)
			} else {
				updated.delete(id)
			}
			return updated
		})
	}

	const addSelectedQuestions = () => {
		const selected = allQuestions.filter((q) => tempSelectedIds.has(q.id))
		setSelectedQuestions(selected)
	}

	return (
		<CustomModal
			modalId="question-modal"
			title="Odaberi pitanja"
			bodyContent={
				<>
					{allQuestions.map((item) => (
						<QuestionSelect
							key={item.id}
							text={item.question}
							checked={tempSelectedIds.has(item.id)}
							onSelect={(e) =>
								handleSelect(e.target.checked, item.id)
							}
						/>
					))}
				</>
			}
			footerContent={
				<>
					<button
						type="button"
						className="btn btn-secondary"
						data-bs-dismiss="modal"
					>
						Zatvori
					</button>
					<button
						onClick={addSelectedQuestions}
						type="button"
						className="btn btn-primary"
						data-bs-dismiss="modal"
					>
						Dodaj pitanja
					</button>
				</>
			}
		/>
	)
}

export default QuestionsModal
