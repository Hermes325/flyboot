"use client"
import React, { useEffect } from 'react'

const PaymentPage = () => {

  useEffect(() => {
    //? Какой параметр отвечает за отправку на email покупателя
    const options = {
      account: 25060038,
      amount: 1,
      transactionId: 't-' + Date.now(),
      subscriberId: "georg3georg3georg@gmail.com",
      testMode: 0,
      customParams: {
        MNT_CUSTOM3: "msk.vitaly@gmail.com"
      }
    }
    var assistant = new (window as any).Assistant.Builder();

    // платёж прошёл успешно
    assistant.setOnSuccessCallback(function (operationId: string, transactionId: string) {
      console.log("setOnSuccessCallback");
      // todo: здесь можно сделать что угодно – например, 
      // перенаправить на другую страницу:
      // location.replace("https://domain.domain");
      alert("setOnSuccessCallback")
    });

    // платёж не прошёл
    assistant.setOnFailCallback(function (operationId: string, transactionId: string) {
      // todo: действия на ваш вкус
      console.log("setOnFailCallback");
      alert("setOnFailCallback")
    });

    // платёж обрабатывается
    assistant.setOnInProgressCallback(function (operationId: string, transactionId: string) {
      // todo: тоже можно что-нибудь придумать 
      console.log("setOnInProgressCallback");
      alert("setOnInProgressCallback")
    });

    assistant.build(options);
  }, [])

  return (<main className='min-h-screen p-[208px]'>

    <div id="payment-form"></div>
  </main>)
}

export default PaymentPage