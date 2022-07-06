import type * as CSS from 'csstype'

import type { Config, Props, ThemeProp, ThemeValues } from '../types'
import { getStyles } from '../utils'

export type GridProps = Props<{
  gridGap: ThemeValues<'spaces'> | CSS.Property.GridGap
  gridRowGap: ThemeValues<'spaces'> | CSS.Property.GridRowGap
  gridColumnGap: ThemeValues<'spaces'> | CSS.Property.GridColumnGap
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

const config: Config[] = [
  { property: 'gridGap', scope: 'spaces' },
  { property: 'gridRowGap', scope: 'spaces' },
  { property: 'gridColumnGap', scope: 'spaces' },
  { property: 'gridColumn' },
  { property: 'gridRow' },
  { property: 'gridArea' },
  { property: 'gridAutoFlow' },
  { property: 'gridAutoRows' },
  { property: 'gridAutoColumns' },
  { property: 'gridTemplateRows' },
  { property: 'gridTemplateColumns' },
  { property: 'gridTemplateAreas' },
]

export const grid = (props: GridProps & ThemeProp) => {
  return getStyles(config, props)
}
