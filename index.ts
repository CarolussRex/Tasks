import { JSDOM } from 'jsdom'
import { IDataVehicle } from './types/types'

const dataVehicle: Array<IDataVehicle> = []
const dataEquipment: Array<IDataVehicle> = []

const vehicleParse = async (file: string, data: Array<IDataVehicle>, tab: string) => {
  try {
    const dom = await JSDOM.fromFile('./public/'+ file)
    const doc = dom.window.document
    const id = doc.querySelector(tab)
    const table = id.querySelector('.vinInfoTable')
    const tbody = table.querySelector('tbody')
    const tr = tbody.querySelectorAll('tr')

    tr.forEach((i:HTMLTableRowElement ) => {
      const tds = i.querySelectorAll('td')
      if (tds.length === 2){
        if(tds[1].textContent.replace(/\s+/g, " ") == " "){
          const post: IDataVehicle = {
            first: tds[0].textContent,
            }
          data.push(post) 
        }
        else{
          const post: IDataVehicle = {
            first: tds[0].textContent,
            last: tds[1].textContent,
            }
          data.push(post)}
        } 
      else{
        const post: IDataVehicle = {
          first: tds[0].textContent,
          middle: tds[1].textContent,
          last: tds[2].textContent,
          }
        data.push(post)       
      }
    })
    
    let print = JSON.stringify(data, null, 1)
    console.log(print)
  }
   catch (e) {
    console.log(e)
  }
}

vehicleParse('abath.html', dataVehicle, '#vinTabsGeneral')
vehicleParse('abath.html', dataEquipment, '#vinStandardEquipment')
