import React from "react"

interface Props {
	modalId: string
	title: string
	bodyContent: React.JSX.Element
	footerContent: React.JSX.Element
}

const CustomModal: React.FC<Props> = ({
	modalId,
	title,
	bodyContent,
	footerContent
}) => {
	return (
		<div id={modalId} className="modal fade" tabIndex={-1}>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">{title}</h5>
					</div>
					<div className="modal-body">{bodyContent}</div>
					<div className="modal-footer">{footerContent}</div>
				</div>
			</div>
		</div>
	)
}

export default CustomModal
