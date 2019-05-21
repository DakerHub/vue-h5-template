import Mock from 'mockjs'
import {
  postList
} from './example'

Mock.mock(/example/, postList)
