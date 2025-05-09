import React, { useEffect, useState } from "react";
import { useStore } from "../store";
import { api } from "../libs/apiCall";
import DialogWrapper from "./wrappers/dialog-wrapper";
import { DialogPanel, DialogTitle, Dialog } from "@headlessui/react";
import { formatCurrency } from "../libs";
import  Button  from "../button";
import { Input} from "./ui/input";
import Loading from "./loading";
import { toast } from "sonner";

const accounts = ["Cash", "Crypto", "Paypal", "Visa Debit Card"];

export const TransferMoney = ({ isOpen, setIsOpen, refetch }) => {
const {user} = useStore((state)=>state)
  const {
    register,
    handdleSubmit,
    formstate: { errors },
    watch
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [accountData, setAccountData] = useState([]);
  const [fromAccountInfo, setFromAccountInfo] = useState([]);
  const [toAccountInfo, setToAccountInfo] = useState([]);

  const submitHandler = async (data) => {
    try {
        setLoading(true);

        const newData = {...data,from_account: fromAccountInfo.id, to_account:toAccountInfo.id}

        const {data:res} = await api.put(`/transaction/transfer-money`,newData)
        if(res?.status==="success"){
            toast.success(res?.message)
            setIsOpen(false);
            refetch();
          
        }
    } catch (error) {
        toast.error(error?.response?.data?.message||error.message)
        console.error("Something went wrong:",error)

    }finally{
        setLoading(false);
    }
  };

  const getAccountBalance=(setAccount,val)=>{
    const filteredAccount = accountData?.find(
      (account) => account.account_name === val
    );
    setAccount(filteredAccount)
  }


  function closeModal() {
    setIsOpen(false);
  }

  const fetchAccount = async () => {
    try {
        const {data:res} = await api.get(`/acount`)
       setAccountData(res?.data)   
    } catch (error) {
        console.log(error)
    }finally{
        setLoading(false);
    }
  };

  useEffect(()=>{
    fetchAccount()
  },[])

  return (
    <DialogWrapper isOpen={isOpen} closeModal={closeModal}>
      <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-slate-900 p-6 text-white align-middle shadow-xl transition -all">
        <DialogTitle
          as="h3"
          className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-300 mb-4 uppercase"
        >
      Transfer money
        </DialogTitle>

        {isLoading?(
          <Loading/>
        ):(
        <form onSubmit={handdleSubmit(submitHandler)} >
          <div className="flex flex-col gap-1 mb-2">
            <p className="text-gray-700 dark:text-gray-400 text-sm mb-2">
              Select Account
            </p>
            <select onChange={(e)=>getAccountBalance(setFromAccountInfo,e.target.value)}
               className="inputStyles"
              >
                <option 
                disabled selected className="w-full flex items-center justify-center dark:bg-slate-900"
                >Select Account</option>
                {accountData?.map((acc,index)=>(
                  <option key={index} value={acc?.account_name} className="w-full flex items-center justify-center dark:bg-slate-900 ">
                    {acc.account_name} {"-"}
                     {formatCurrency(acc?.account_balance)}
                    </option>

                ))}
              </select>
          </div>
          <div className="flex flex-col gap-1 mb-2">
            <p className="text-gray-700 dark:text-gray-400 text-sm mb-2">
              From Account
            </p>
            <select onChange={(e)=>getAccountBalance(setToAccountInfo,e.target.value)}
               className="inputStyles"
              >
                <option 
                disabled selected className="w-full flex items-center justify-center dark:bg-slate-900"
                >To Account</option>
                {accountData?.map((acc,index)=>(
                  <option 
                  key={index} 
                  value={acc?.account_name} 
                  className="w-full flex items-center justify-center dark:bg-slate-900 ">
                    {acc.account_name} {"-"}
                     {formatCurrency(acc?.account_balance)}
                    </option>

                ))}
              </select>
          </div>

          {fromAccountInfo?.account_balance<=0&&(
            <div className="flex items-center bg-yellow-400 p-2 mt-6 text-black rounded">
              <MdOutlineWarning size={30} />
              <span className="text-sm">
                You can trasfer money from this account. Insufficient account balance
              </span>
            </div>
          )}
          {fromAccountInfo?.account_balance<=0&&(
           <>
           <div className="w-full mt-8">
           <Input
            type="number"
            name="amount"
            label="Amount"
            placeholder="Amount/10.56"
       {...register("amount"),{
        required: "Transaction Amount is required"
       }}
       error={
        errors.amount?errors.amount.message:""
       }

            />
            
           </div>
           <div className="w-full mt-8">
           <Button
            disabled ={loading}
            type="submit"
            className="bg-violet-700 hover:bg-blue-700 text-white w-full"
            >
              {`Transfer ${
                watch("amount")?formatCurrency(watch("amount")):""
              }`}
            </Button>
           </div>
           </>
          )}            
        </form>
        )}
      </DialogPanel>
    </DialogWrapper>
  );
};

export default AddMoney;
