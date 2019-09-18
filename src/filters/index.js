import Vue from 'vue'
import date from './date'
import currency from './currency'
import dictinory from './dictinory'

Vue.filter('date', date)
Vue.filter('currency', currency)
Vue.filter('dictinory', dictinory)
