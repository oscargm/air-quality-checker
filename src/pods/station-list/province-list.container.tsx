import { connect } from 'react-redux'
import {
  getMunicipalities as getMunicipalitiesAction,
  getProvinces as getProvincesAction,
} from './actions'
import { ProvinceListComponent } from './components'
import { getProvinces } from './selectors'

const mapStateToProps = state => ({
  provinces: getProvinces(state),
})

const mapDispatchToProps = dispatch => ({
  getProvincesData: () => dispatch(getProvincesAction()),
  getMunicipalitiesData: (provinceId: number) =>
    dispatch(getMunicipalitiesAction(provinceId)),
})

export const ProvinceList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProvinceListComponent)
