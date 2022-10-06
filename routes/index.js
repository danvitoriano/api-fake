var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/v1/statement/orders", function (req, res) {
  res.json([
    {
      type: "GIFT_CASH_IN",
      status: "CAPTURED",
      totalAmountInCents: 500000,
      title: "Teste",
      description: "teste",
      transactions: [
        {
          uuid: "c87d65fb-879f-4efd-b109-bf6a8283cc6a",
          walletUuid: "f2aa6ebb-8f70-4a0f-bb52-02ce30d98d6c",
          status: "CAPTURED",
          type: "CREDIT",
          paymentMethod: "CASH",
          peerWalletUuid: "d52a20cb-7329-4239-805c-eae1c485be30",
          amountInCents: 500000,
        },
        {
          uuid: "785a3e50-2ef7-4056-9bd6-1e9e5e2345b2",
          walletUuid: "d52a20cb-7329-4239-805c-eae1c485be30",
          status: "CAPTURED",
          type: "DEBIT",
          paymentMethod: "CASH",
          peerWalletUuid: "f2aa6ebb-8f70-4a0f-bb52-02ce30d98d6c",
          amountInCents: 500000,
        },
      ],
      createdAt: "2022-09-27T14:59:05Z",
      updatedAt: "2022-09-27T14:59:05.016Z",
      customPayload: {},
      paymentMethods: ["CASH"],
      nsu: "353945000552",
      peerWallets: [
        {
          uuid: "d52a20cb-7329-4239-805c-eae1c485be30",
          name: "Ame Digital",
          type: "MANAGER",
          owner: {
            uuid: "8eabeba1-87a7-4314-bd93-9f6f98820b8e",
            externalId: "8eabeba1-87a7-4314-bd93-9f6f98820b8e",
            name: "Ame Digital",
            createdAt: "2018-12-19T12:40:26Z",
            updatedAt: "2018-12-19T12:40:26Z",
            active: true,
          },
        },
        {
          uuid: "f2aa6ebb-8f70-4a0f-bb52-02ce30d98d6c",
          name: "Danilo DEV",
          type: "CUSTOMER",
          owner: {
            uuid: "7d0cd804-8760-4751-bbbf-0a974b7d6b5f",
            externalId: "efc11bbc-c502-4202-8362-d7efa4580097",
            name: "Danilo DEV",
            createdAt: "2022-09-21T12:10:16.599Z",
            updatedAt: "2022-09-21T12:10:16.599Z",
            nickname: "Danilo DEV",
            active: true,
          },
        },
      ],
      uuid: "b5d6e288-c87c-46a0-aadf-559b16ef5576",
    },
    {
      type: "PURCHASE",
      status: "CAPTURED",
      totalAmountInCents: 500000,
      title: "Teste",
      description: "teste",
      transactions: [
        {
          uuid: "c87d65fb-879f-4efd-b109-bf6a8283cc6a",
          walletUuid: "f2aa6ebb-8f70-4a0f-bb52-02ce30d98d6c",
          status: "CAPTURED",
          type: "CREDIT",
          paymentMethod: "CASH",
          peerWalletUuid: "d52a20cb-7329-4239-805c-eae1c485be30",
          amountInCents: 500000,
        }
      ],
      createdAt: "2022-09-27T14:59:05Z",
      updatedAt: "2022-09-27T14:59:05.016Z",
      customPayload: {},
      paymentMethods: ["CASH"],
      nsu: "353945000552",
      peerWallets: [
        {
          uuid: "d52a20cb-7329-4239-805c-eae1c485be30",
          name: "Ame Digital",
          type: "MANAGER",
          owner: {
            uuid: "8eabeba1-87a7-4314-bd93-9f6f98820b8e",
            externalId: "8eabeba1-87a7-4314-bd93-9f6f98820b8e",
            name: "Ame Digital",
            createdAt: "2018-12-19T12:40:26Z",
            updatedAt: "2018-12-19T12:40:26Z",
            active: true,
          },
        },
        {
          uuid: "f2aa6ebb-8f70-4a0f-bb52-02ce30d98d6c",
          name: "Danilo DEV",
          type: "CUSTOMER",
          owner: {
            uuid: "7d0cd804-8760-4751-bbbf-0a974b7d6b5f",
            externalId: "efc11bbc-c502-4202-8362-d7efa4580097",
            name: "Danilo DEV",
            createdAt: "2022-09-21T12:10:16.599Z",
            updatedAt: "2022-09-21T12:10:16.599Z",
            nickname: "Danilo DEV",
            active: true,
          },
        },
      ],
      referenceOrder: {
        type: "PURCHASE",
        subType: "BLOCK",
        peerWallets: [
          {
            uuid: "f2aa6ebb-8f70-4a0f-bb52-02ce30d98d6c",
            name: "Danilo Vitoriano",
          },
        ],
      },
      uuid: "b5d6e288-c87c-46a0-aadf-559b16ef5577",
    },
  ]);
});

router.get("/api/wallet/user/statements/:statmentId", function (req, res) {
  const statmentId = req.params.statmentId;
  console.log(statmentId);
  if (statmentId === "b5d6e288-c87c-46a0-aadf-559b16ef5576") {
    res.json({
      id: "b5d6e288-c87c-46a0-aadf-559b16ef5576",
      date: "2022-09-27T11:59:05.000537",
      operationType: "CREDIT",
      name: "Ame Digital",
      title: "Teste",
      description: "teste",
      status: "SUCCESS",
      type: "CASH_IN",
      currency: "BRL",
      cashType: "CASH",
      amount: 500000,
      calculatedAmount: 500000,
      calculatedAmountMdr: 0,
      calculatedAmountAdvance: 0,
      splits: [
        {
          id: "c87d65fb-879f-4efd-b109-bf6a8283cc6a",
          date: "2022-09-27T11:59:05.001319",
          status: "SUCCESS",
          cashType: "CASH",
          amount: 500000,
          takeRateAmountInCents: 0,
          grossAmountInCents: 0,
          netAmountInCents: 0,
          walletId: "f2aa6ebb-8f70-4a0f-bb52-02ce30d98d6c",
        },
      ],
      peer: {
        id: "8eabeba1-87a7-4314-bd93-9f6f98820b8e",
        ownerId: "8eabeba1-87a7-4314-bd93-9f6f98820b8e",
        name: "Ame Digital",
      },
      nsu: 353945000552,
      referenceWalletUuid: "f2aa6ebb-8f70-4a0f-bb52-02ce30d98d6c",
      nsuPurchase: 353945000552,
      sumSplitsValueCashAndCashback: 500000,
    });
  } else {
    res.json({
      id: "b5d6e288-c87c-46a0-aadf-559b16ef5577",
      date: "2022-10-06T16:19:06.39135",
      operationType: "CREDIT",
      name: "Ame Digital",
      title: "Pix",
      status: "SUCCESS",
      type: "PAYMENT",
      subType: "PIX",
      currency: "BRL",
      cashType: "CASH",
      amount: 1,
      calculatedAmount: 1,
      calculatedAmountMdr: 0,
      calculatedAmountAdvance: 0,
      splits: [
        {
          id: "0e8fea63-b562-48c0-b6ab-6cfc777c476e",
          date: "2022-10-06T16:19:06.39135",
          releaseDate: "2022-10-06T16:19:06",
          status: "SUCCESS",
          cashType: "CASH",
          amount: 1,
          rule: {
            paymentMethod: "CASH",
            takeRate: 0,
            takeRateUnit: "PERCENT",
            releaseTime: 0,
            releaseTimeUnit: "DAYS",
          },
          takeRateUnit: "PERCENT",
          takeRateAmountInCents: 0,
          grossAmountInCents: 1,
          netAmountInCents: 1,
          walletId: "e2b4df11-4094-460c-917c-133beb39d7e5",
        },
      ],
      peer: {
        id: "8eabeba1-87a7-4314-bd93-9f6f98820b8e",
        ownerId: "8eabeba1-87a7-4314-bd93-9f6f98820b8e",
        name: "Ame Digital",
      },
      nsu: 769546389520,
      referenceOrderUuid: "0a834dc8-a35d-463c-9adc-501639d55791",
      referenceWalletUuid: "e2b4df11-4094-460c-917c-133beb39d7e5",
      refunded: false,
      nsuPurchase: 869545502515,
      sumSplitsValueCashAndCashback: 1,
      pixDetails: {
        payer: {
          institutionName: "ITAÚ UNIBANCO S.A.",
          documentNumber: "25158897867",
          name: "DANILO VITORIANO",
        },
        receiver: {
          institutionName: "AME DIGITAL BRASIL LTDA.",
          documentNumber: "25158897867",
          name: "Danilo Vitoriano",
        },
        endToEndId: "E60701190202210061918DY57G3KUYCI",
      },
    });
  }
});

module.exports = router;
