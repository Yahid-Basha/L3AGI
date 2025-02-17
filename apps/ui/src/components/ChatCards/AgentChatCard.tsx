import AvatarGenerator from 'components/AvatarGenerator/AvatarGenerator'
import MemberText from 'modals/AIChatModal/components/ChatMembers/components/MemberText'

import IconButton from 'share-ui/components/IconButton/IconButton'

import Edit from 'share-ui/components/Icon/Icons/components/Edit'
import EyeOpen from 'share-ui/components/Icon/Icons/components/EyeOpen'

import {
  StyledAgentWrapper,
  StyledIconButtonWrapper,
  StyledIconWrapper,
} from 'components/ChatCards/TeamChatCard'
import {
  StyledDeleteIcon,
  StyledEditIcon,
  StyledEyeOpenIcon,
} from 'pages/TeamOfAgents/TeamOfAgentsCard/TeamOfAgentsCard'

type AgentChatCardProps = {
  onClick: () => void
  onViewClick: () => void
  onEditClick?: () => void
  onDeleteClick?: () => void
  picked: boolean
  agent: any
}

const AgentChatCard = ({
  onClick,
  onViewClick,
  onEditClick,
  onDeleteClick,
  picked,
  agent,
}: AgentChatCardProps) => {
  const handleEdit = (event: any) => {
    event.stopPropagation()
    if (onEditClick) {
      onEditClick()
    }
  }

  const handleView = (event: any) => {
    event.stopPropagation()
    onViewClick()
  }

  const handleDelete = (event: any) => {
    event.stopPropagation()
    if (onDeleteClick) {
      onDeleteClick()
    }
  }

  return (
    <StyledAgentWrapper onClick={onClick} picked={picked}>
      <AvatarGenerator name={agent?.name} size={30} avatar={agent.avatar} />
      <MemberText name={agent?.name} role={agent?.role} />

      <StyledIconButtonWrapper className='hiddenButton'>
        {onDeleteClick && (
          <IconButton
            onClick={handleDelete}
            icon={() => <StyledDeleteIcon />}
            size={IconButton.sizes?.SMALL}
            kind={IconButton.kinds?.TERTIARY}
            // ariaLabel='Delete'
          />
        )}

        <IconButton
          onClick={handleView}
          icon={() => (
            <StyledIconWrapper>
              <StyledEyeOpenIcon />
            </StyledIconWrapper>
          )}
          size={IconButton.sizes?.SMALL}
          kind={IconButton.kinds?.TERTIARY}
          // ariaLabel='View'
        />

        {onEditClick && (
          <IconButton
            onClick={handleEdit}
            icon={() => <StyledEditIcon />}
            size={IconButton.sizes?.SMALL}
            kind={IconButton.kinds?.TERTIARY}
            // ariaLabel='Edit'
          />
        )}
      </StyledIconButtonWrapper>
    </StyledAgentWrapper>
  )
}

export default AgentChatCard
