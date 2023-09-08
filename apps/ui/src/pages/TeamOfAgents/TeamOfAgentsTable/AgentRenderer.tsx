import Tooltip from '@l3-lib/ui-core/dist/Tooltip'
import Tags from '@l3-lib/ui-core/dist/Tags'
import styled from 'styled-components'

// TODO: fix after services types

type AgentRendererProps = {
  params: any
  options: any
}

const AgentRenderer = ({ params, options }: AgentRendererProps) => {
  const { value: agentId } = params

  const agentWithConfigs = options.find((option: any) => option.agent.id === agentId)
  if (!agentWithConfigs) return null

  const { agent } = agentWithConfigs

  return (
    <StyledAgents>
      <Tooltip content={agent.name}>
        <Tags label={agent.name} readOnly color={Tags.colors.white} size='small' noAnimation />
      </Tooltip>
    </StyledAgents>
  )
}

export default AgentRenderer

const StyledAgents = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: center;
  gap: 5px;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;

  min-width: fit-content;
  max-height: 20px;
`
