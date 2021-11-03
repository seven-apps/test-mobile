import type { ParamListBase } from '@react-navigation/routers'
import { RouteProp } from '@react-navigation/native'

type RouterParamsType = {
  category: string
}

export interface RouterParams extends RouteProp<ParamListBase> {
  params: RouterParamsType
}