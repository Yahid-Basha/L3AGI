import styled, { css } from 'styled-components'

import Typography from '@l3-lib/ui-core/dist/Typography'

type DataLoaderCardProps = {
  title: string
  onClick: () => void
  isSelected: boolean
  isActive: boolean
}

const DataLoaderCard = ({ title, onClick, isSelected, isActive }: DataLoaderCardProps) => {
  return (
    <StyledDataLoaderCard
      onClick={() => {
        if (isActive) {
          onClick()
        }
      }}
      isSelected={isSelected}
      isActive={isActive}
    >
      <Typography
        value={title}
        type={Typography.types.LABEL}
        size={Typography.sizes.md}
        customColor={'#FFF'}
      />
    </StyledDataLoaderCard>
  )
}

export default DataLoaderCard

const StyledDataLoaderCard = styled.div<{ isSelected: boolean; isActive: boolean }>`
  flex-grow: 1;
  height: 50px;
  min-height: 50px;

  border-radius: 8px;
  border: 2px solid transparent;

  box-shadow: inset 0px 1px 20px rgba(8, 8, 16, 0.1);

  background: rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  ${p =>
    !p.isActive &&
    css`
      opacity: 0.6;
    `}

  ${p =>
    p.isSelected &&
    css`
      border-color: #48ecf0;
    `};
`
