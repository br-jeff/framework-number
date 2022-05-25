#! /usr/bin/env node
import { cyanLog, yellowLog } from './src/utils/console_messages'
const argNumber = process.argv[2]

cyanLog('########################### Bem Vindo ########################### ')
yellowLog(`Número escolhido: ${argNumber}`)
