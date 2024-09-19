import React from "react";
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import Image from "next/image";

export default function CheckoutForm({dpmCheckerLink}:{dpmCheckerLink :string}) {
  const stripe = useStripe();
  const elements = useElements();


  const [message, setMessage] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [modal , setModal] = React.useState(false)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000",
      },
    });


    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message as string);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
    setModal(true)
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <>
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" options={paymentElementOptions! as any} />
        <button disabled={isLoading || !stripe || !elements} id="submit">
          <span id="button-text">
            {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
      {/* [DEV]: For demo purposes only, display dynamic payment methods annotation and integration checker */}
      <div id="dpm-annotation">
        <p>
          Payment methods are dynamically displayed based on customer location, order amount, and currency.&nbsp;
          <a href={dpmCheckerLink} target="_blank" rel="noopener noreferrer" id="dpm-integration-checker">Preview payment methods by transaction</a>
        </p>
      </div>
      {modal == true && message == "" && isLoading == false && 
       <AlertDialog open={modal}>
  <AlertDialogContent >
    <AlertDialogHeader className=" flex items-center flex-row">
      <AlertDialogTitle className="  font-thin   text-[25px]">Your Payements was succesfull </AlertDialogTitle>
      <Image 
    src="/assets/check.png"
    alt=""
    width={100}
    height={100}
     className=" rounded-full"
    />
    </AlertDialogHeader>
   
    <AlertDialogFooter>
      <AlertDialogAction onClick={()=> setModal(false)}>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
}

    </>
  );
}