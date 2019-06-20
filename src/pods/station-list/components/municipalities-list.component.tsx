import * as React from 'react'
import { ListItem } from '@material-ui/core'
import { Municipality } from '../store'

export interface MunicipalitiesListProps {
  municipalities: Municipality[]
}

const MunicipalitiesList = (props: MunicipalitiesListProps) => {
  const { municipalities } = props
  return municipalities.map((municipality: Municipality) => (
    <ListItem key={municipality.id}>{municipality.name}</ListItem>
  ))
}
