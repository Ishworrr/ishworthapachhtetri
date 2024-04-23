import { currency } from "../../scripts/utils/money.js";

if (currency(2000.5)==='20.01') {
 console.log('passes')
} else{
    console.log('failedd')
}