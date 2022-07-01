import type * as CSS from 'csstype'

import type { Theme } from '../theme'
import { get } from '../utils'

export type GridProps = Partial<{
  gridGap: keyof Theme['spaces'] | CSS.Property.GridGap
  gridRowGap: keyof Theme['spaces'] | CSS.Property.GridRowGap
  gridColumnGap: keyof Theme['spaces'] | CSS.Property.GridColumnGap
  gridColumn: CSS.Property.GridColumn
  gridRow: CSS.Property.GridRow
  gridArea: CSS.Property.GridArea
  gridAutoFlow: CSS.Property.GridAutoFlow
  gridAutoRows: CSS.Property.GridAutoRows
  gridAutoColumns: CSS.Property.GridAutoColumns
  gridTemplateRows: CSS.Property.GridTemplateRows
  gridTemplateColumns: CSS.Property.GridTemplateColumns
  gridTemplateAreas: CSS.Property.Grid
}>

export const grid = (props: GridProps & { theme?: Theme }) => {
  return {
    gridGap: get(props.gridGap, props.theme, 'spaces'),
    gridRowGap: get(props.gridRowGap, props.theme, 'spaces'),
    gridColumnGap: get(props.gridColumnGap, props.theme, 'spaces'),
    gridColumn: props.gridColumn,
    gridRow: props.gridRow,
    gridArea: props.gridArea,
    gridAutoFlow: props.gridAutoFlow,
    gridAutoRows: props.gridAutoRows,
    gridAutoColumns: props.gridAutoColumns,
    gridTemplateRows: props.gridTemplateRows,
    gridTemplateColumns: props.gridTemplateColumns,
    gridTemplateAreas: props.gridTemplateAreas,
  }
}
