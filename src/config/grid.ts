import type * as CSS from 'csstype'

import type { Config, Props, ThemeValues } from '../types'
import { compose } from '../utils'

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

export const gridConfig: Config[] = [
  { jsxProperty: 'gridGap', scope: 'spaces' },
  { jsxProperty: 'gridRowGap', scope: 'spaces' },
  { jsxProperty: 'gridColumnGap', scope: 'spaces' },
  { jsxProperty: 'gridColumn' },
  { jsxProperty: 'gridRow' },
  { jsxProperty: 'gridArea' },
  { jsxProperty: 'gridAutoFlow' },
  { jsxProperty: 'gridAutoRows' },
  { jsxProperty: 'gridAutoColumns' },
  { jsxProperty: 'gridTemplateRows' },
  { jsxProperty: 'gridTemplateColumns' },
  { jsxProperty: 'gridTemplateAreas' },
]

export const grid = compose(gridConfig)
