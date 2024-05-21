'use strict';

// Data
const account1 = {
  owner: 'Akasha Petroda',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Arnab Goswami',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2024-05-15T13:15:33.035Z',
    '2024-05-14T09:48:16.867Z',
    '2024-05-13T06:04:23.907Z',
    '2024-05-16T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'INR',
  locale: 'en-IN',
};

const account3 = {
  owner: 'George Georgias',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account4 = {
  owner: 'Shin Aabe',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
  ],
  currency: 'JPY',
  locale: 'en-JP',
};

const account5 = {
  owner: 'María Fernández',
  movements: [1500, 2100, -350, 18000, -700, -200, 250, 600],
  interestRate: 1.8, // %
  pin: 5555,
  movementsDates: [
    '2023-11-18T21:31:17.178Z',
    '2023-12-23T07:42:02.383Z',
    '2024-01-28T09:15:04.904Z',
    '2024-04-01T10:17:24.185Z',
    '2024-05-08T14:11:59.604Z',
    '2024-05-27T17:01:17.194Z',
    '2024-07-11T23:36:17.929Z',
    '2024-07-12T10:51:36.790Z',
  ],
  currency: 'ARS',
  locale: 'es-AR',
};

const account6 = {
  owner: 'Le Wuha',
  movements: [8000, 5200, -800, -2300, -4500, -1200, 12000, -100],
  interestRate: 1.3,
  pin: 6666,
  movementsDates: [
    '2024-05-15T13:15:33.035Z',
    '2024-05-14T09:48:16.867Z',
    '2024-05-13T06:04:23.907Z',
    '2024-05-16T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'CNY',
  locale: 'zh-CN',
};

const accounts = [account1, account2, account3, account4, account5, account6];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = function (date1, date2) {
    return Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  };
  // const day = String(date.getDate()).padStart(2, '0');
  // const month = String(date.getMonth() + 1).padStart(2, '0');
  // const year = date.getFullYear();
  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);
  if (daysPassed === 0) {
    return 'Today';
  } else if (daysPassed === 1) {
    return 'Yesterday';
  } else if (daysPassed < 7) {
    return `${daysPassed} days ago`;
  } else {
    // return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

const formatCur = function (value, locale, currency) {
  const formattedMov = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
  return formattedMov;
};

const displayMovements = function (accs, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort
    ? accs.movements.slice().sort(function (a, b) {
        if (a < b) {
          return -1;
        } else {
          return 1;
        }
      })
    : accs.movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(accs.movementsDates[i]);
    const displayDate = formatMovementDate(date, accs.locale);

    /////
    const formattedMov = formatCur(mov, accs.locale, accs.currency);
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>     
          <div class="movements__date">${displayDate}</div>       
          <div class="movements__value">${formattedMov}</div>
        </div>
  `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// displayMovements(account1.movements);
const calcDisplayBalance = function (accounts) {
  const balance = accounts.movements.reduce(function (acc, move) {
    return acc + move;
  }, 0);
  accounts.balance = balance;
  const formattedMov = formatCur(
    accounts.balance,
    accounts.locale,
    accounts.currency
  );

  labelBalance.textContent = formattedMov;
  // console.log(accounts);
};
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// calcDisplayBalance(account1.movements);

const updateUI = function (currentAccount) {
  displayMovements(currentAccount);
  calcDisplayBalance(currentAccount);
  calcDisplaySummary(currentAccount);
};

const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(function (move) {
      if (move > 0) {
        return move;
      }
    })
    .reduce(function (acc, move) {
      return acc + move;
    }, 0);
  const formattedMov = formatCur(incomes, account.locale, account.currency);
  labelSumIn.textContent = formattedMov;

  const outcomes = account.movements
    .filter(function (move) {
      if (move < 0) {
        return Math.abs(move);
      }
    })
    .reduce(function (arr, move) {
      return arr + Math.abs(move);
    }, 0);
  const formattedMov2 = formatCur(outcomes, account.locale, account.currency);
  labelSumOut.textContent = formattedMov2;

  const interests = account.movements
    .filter(function (move) {
      if (move > 0) {
        return move;
      }
    })
    .map(function (move) {
      return (account.interestRate / 100) * move;
    })
    .filter(function (move, i, m) {
      if (move >= 1) {
        return move;
      }
    })
    .reduce(function (acc, move) {
      return acc + move;
    }, 0);
  const formattedMov3 = formatCur(interests, account.locale, account.currency);
  labelSumInterest.textContent = formattedMov3;
};
// calcDisplaySummary(account1.movements);
const createUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0].toUpperCase())
      .join('');
  });
};
createUserName(accounts);
// console.log(accounts)

let currentAccount, timer;
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(function (accs) {
    if (accs.userName === inputLoginUsername.value) {
      return accs;
    }
  });
  // console.log(currentAccount)
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome, ${currentAccount.owner.split(' ')[0]}`;
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    containerApp.style.opacity = 100;
    // displayMovements(currentAccount.movements);
    // calcDisplayBalance(currentAccount);
    // calcDisplaySummary(currentAccount);
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      weekday: 'long',
    };
    const locale = navigator.language;
    // console.log(locale)
    labelDate.textContent = new Intl.DateTimeFormat(
      `${currentAccount.locale}`,
      options
    ).format(now);
    if (timer) {
      clearInterval(timer);
    }
    timer = startLogOutTimer();
    updateUI(currentAccount);

    // const now = new Date();
    // const date = String(now.getDate()).padStart(2, '0');
    // const month = String(now.getMonth() + 1).padStart(2, '0');
    // const year = now.getFullYear();
    // const hour = String(now.getHours()).padStart(2, '0');
    // const min = String(now.getMinutes()).padStart(2, '0');
    // labelDate.textContent = `${date}/${month}/${year}, ${hour}:${min}`;
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(function (accs) {
    if (accs.userName === inputTransferTo.value) {
      return accs;
    }
  });
  // console.log(amount, receiverAcc);
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc.userName !== currentAccount.userName
  ) {
    currentAccount.movements.push(-1 * amount);
    receiverAcc.movements.push(amount);
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());
    console.log(new Date());
    updateUI(currentAccount);
    if (timer) {
      clearInterval(timer);
    }
    timer = startLogOutTimer();
  }
  inputTransferTo.value = '';
  inputTransferAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const ind = accounts.findIndex(function (accs) {
      if (
        accs.userName === inputCloseUsername.value &&
        accs.pin === Number(inputClosePin.value)
      ) {
        inputCloseUsername.value = '';
        inputClosePin.value = '';
        return accs;
      }
    });
    accounts.splice(ind, 1);
    containerApp.style.opacity = 0;
  }
  // console.log(accounts)
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Math.floor(Number(inputLoanAmount.value));
  if (
    amount > 0 &&
    currentAccount.movements.some(function (move) {
      if (move > 0 && move >= 0.1 * amount) {
        return move;
      }
    })
  ) {
    setTimeout(function () {
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(new Date().toISOString());
      updateUI(currentAccount);
      inputLoanAmount.value = '';
    }, 4000);
    if (timer) {
      clearInterval(timer);
    }
    timer = startLogOutTimer();
  }
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;
// // console.log(now)

const startLogOutTimer = function () {
  let time = 300;
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, '0');
    const sec = String(time % 60).padStart(2, '0');
    labelTimer.textContent = `${min}:${sec}`;
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }
    time = time - 1;
  };
  tick();
  const timer = setInterval(tick, 5000);
  return timer;
};

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movename
/////////////////////////////////////////////////
// console.log(accounts)

const totalDepositsUSD = movements
  .filter(move => move > 0)
  .map(move => move * 1.1)
  .reduce((acc, move) => {
    return acc + move;
  }, 0);
// console.log(totalDepositsUSD);

const firstWithdrawal = movements.find(function (move) {
  if (move < 0) {
    return move;
  }
});
// console.log(firstWithdrawal)
// console.log(accounts)
const account = accounts.find(function (accs) {
  if (accs.owner === 'Jessica Davis') {
    return accs;
  }
});
// console.log(account);

// console.log(movements)
const isit = movements.some(function (move) {
  if (move > 0) {
    return move;
  }
});
// console.log(isit)

const accountMovements = accounts
  .map(function (accs) {
    return accs.movements;
  })
  .flat()
  .reduce(function (acc, move) {
    return acc + move;
  }, 0);
// console.log(accountMovements)

movements.sort(function (a, b) {
  if (a < b) {
    return -1;
  } else {
    return 1;
  }
});
// console.log(movements)

const arr = Array.from({ length: 100 }, (move, ind) => {
  return Math.trunc(Math.random() * 6) + 1;
});
// console.log(arr);

labelBalance.addEventListener('click', function () {
  const array = Array.from(document.querySelectorAll('.movements__value'));

  // const res = array.reduce(function (acc, move) {
  //   return acc + Number(move.innerHTML);
  // }, 0)
  const res = array
    .map(function (mov) {
      let x = mov.innerHTML;
      return mov.innerHTML.slice(0, x.length - 1);
    })
    .reduce(function (acc, move) {
      return acc + Number(move);
    }, 0);
  console.log(res);
});
// const movementUI = document.querySelectorAll('.movements__value');

const bankDepositSum = accounts
  .map(function (accs) {
    return accs.movements;
  })
  .flat()
  .filter(function (mov) {
    if (mov > 0) {
      return mov;
    }
  })
  .reduce(function (acc, mov) {
    return acc + mov;
  }, 0);
// console.log(bankDepositSum)
const numDeposits1000 = accounts
  .map(function (accs) {
    return accs.movements;
  })
  .flat()
  .filter(function (accs) {
    return accs >= 1000;
  }).length;
// console.log(numDeposits1000)
const date1 = new Date(2037, 4, 14);
// console.log(date1);

const options = {
  style: 'unit',
  unit: 'mile-per-hour',
};
const cv = 98765432.21;
// console.log(new Intl.NumberFormat('en-US', options).format(cv));
// console.log(new Intl.NumberFormat('en-IN', options).format(cv));

const ingredients = ['spinach', 'olives'];
const pizzaTimer = setTimeout(
  function (ing1, ing2) {
    console.log(`We are making pizza with ${ing1} & ${ing2}.`);
  },
  3000,
  ...ingredients
);
if (ingredients.includes('spinach')) {
  clearTimeout(pizzaTimer);
}

//setInterval
// setInterval(function () {
//   console.log(new Date());
// }, 2000)
