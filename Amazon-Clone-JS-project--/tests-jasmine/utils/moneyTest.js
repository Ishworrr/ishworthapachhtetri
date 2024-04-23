import { currency } from "../../scripts/utils/money.js";

//console.log('test suite: currency')
// if (currency(20095)==='20.95') {
//     console.log('passes')
//    } else{
//        console.log('failedd')
//    }

describe('test suite: currency',()=>{
    it('converts cents into dollar ',()=>{
        expect(currency(2095)).toEqual('20.95');
        })
    
        it('works with 0',()=>{
            expect(currency(0)).toEqual('0.00');
        })
})