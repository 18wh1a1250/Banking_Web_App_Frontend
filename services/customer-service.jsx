import { myAxios } from "./helper";

export const registration = (user) => {
  return myAxios
    .post("/api/v1/auth/register", user)
    .then((response) => response.data);
};

export const customerLogin = (loginDetail) => {
  return myAxios
    .post("/api/v1/auth/login", loginDetail)
    .then((response) => response.data);
};

export const acctInfo = (acctID) => {
  return myAxios
    .get(`/account/${acctID}`, acctID)
    .then((response) => response.data);
};

export const transactionLogs = (acctID) => {
  return myAxios
    .get(`/account/${acctID}/logs`, acctID)
    .then((response) => response.data);
};

export const withdraw = (data) => {
  return myAxios
    .put(`/${data.acctID}/withdraw/${data.amount}`, data.acctID, data.amount)
    .then((response) => response.data);
};

export const deposit = (data) => {
  return myAxios
    .put(`/${data.acctID}/deposit/${data.amount}`, data.acctID, data.amount)
    .then((response) => response.data);
};

export const fundTransfer = (data) => {
  return myAxios
    .put(
      `/${data.acctID}/transfer/${data.destAcctID}/${data.amount}`,
      data.acctID,
      data.destAcctID,
      data.amount
    )
    .then((response) => response.data);
};

export const loadAllAccounts = () => {
  return myAxios.get(`/accounts`).then((response) => {
    return response.data;
  });
};
