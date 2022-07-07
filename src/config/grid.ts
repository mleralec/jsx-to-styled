import type * as CSS from 'csstype'

import type { Config, Props, ThemeValues, ObjectProps } from '../types'
import { compose } from '../utils'

export type GridProps = Props<{
  gridGap: ObjectProps<ThemeValues<'spaces'> | CSS.Property.GridGap>
  gridRowGap: ObjectProps<ThemeValues<'spaces'> | CSS.Property.GridRowGap>
  gridColumnGap: ObjectProps<ThemeValues<'spaces'> | CSS.Property.GridColumnGap>
  gridColumn: ObjectProps<CSS.Property.GridColumn>
  gridRow: ObjectProps<CSS.Property.GridRow>
  gridArea: ObjectProps<CSS.Property.GridArea>
  gridAutoFlow: ObjectProps<CSS.Property.GridAutoFlow>
  gridAutoRows: ObjectProps<CSS.Property.GridAutoRows>
  gridAutoColumns: ObjectProps<CSS.Property.GridAutoColumns>
  gridTemplateRows: ObjectProps<CSS.Property.GridTemplateRows>
  gridTemplateColumns: ObjectProps<CSS.Property.GridTemplateColumns>
  gridTemplateAreas: ObjectProps<CSS.Property.Grid>
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
