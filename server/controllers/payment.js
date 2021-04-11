// Gerald Addo-Tetteh
// Payment Controllers
// Makes requests to PayBox Api

const request = require("request");

const makeRequest = (req, res) => {
  const requestPath = req.body.path;
  const globalResponse = res;
  request.post(
    requestPath,
    {
      auth: {
        bearer: process.env.PAY_BOX_TOKEN,
      },
    },
    function completeRequest(err, res, body) {
      if (err) {
        globalResponse.status(400).end();
        return;
      }
      globalResponse.status(200).end();
    }
  );
};

exports.postCardPayment = (req, res, next) => {
  makeRequest(req, res);
};

exports.postMobileMoneyPayment = (req, res, next) => {
  makeRequest(req, res);
};

exports.postBankPayment = (req, res, next) => {
  makeRequest(req, res);
};
