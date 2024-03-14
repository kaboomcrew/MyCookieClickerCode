var money = 0;
var cpc = 1;
var moneyreq1 = 10;
var moneyreq2 = 100;
var moneyreq3 = 1000;
var moneypersec = 0;
var idleval1 = 10;
var idleval2 = 100;


function plusmoney() {
  money += cpc;
  document.getElementById('money').innerHTML = String(money);
  var button = document.getElementById('earn');
  button.style.width = '70%';
  button.style.height = '190px';
  setTimeout(() => {  
    button.style.width = '75%';   
    button.style.height = '200px';
  }, 100);
}

function cpclvlup1() {
  if (money >= moneyreq1) {
    money -= moneyreq1;
    cpc += 1;
    document.getElementById('cpc').innerHTML = String(cpc);
    moneyreq1 += 10;
    document.getElementById('money').innerHTML = String(money);
    document.getElementById('upgad1').innerHTML = 'Upgrade + 1 cpc $' + String(moneyreq1);
  } else if (money < moneyreq1) {
    document.getElementById('upgad1').innerHTML = 'Not Enough Money!';
    setTimeout(() => {   
      document.getElementById('upgad1').innerHTML = 'Upgrade + 1 cpc $' + String(moneyreq1);
    }, 500);
  }
}

function cpclvlup2() {
  if (money >= moneyreq2) {
    money -= moneyreq2;
    cpc += 10;
    document.getElementById('cpc').innerHTML = String(cpc);
    moneyreq2 += 100;
    document.getElementById('money').innerHTML = String(money);
    document.getElementById('upgad2').innerHTML = 'Upgrade + 10 cpc $' + String(moneyreq2);
  } else if (money < moneyreq2) {
    document.getElementById('upgad2').innerHTML = 'Not Enough Money!';
    setTimeout(() => {   
      document.getElementById('upgad2').innerHTML = 'Upgrade + 10 cpc $' + String(moneyreq2);
    }, 500);
  }
}

function cpclvlup3() {
  if (money >= moneyreq3) {
    money -= moneyreq3;
    cpc += 100;
    document.getElementById('cpc').innerHTML = String(cpc);
    moneyreq3 += 1000;
    document.getElementById('money').innerHTML = String(money);
    document.getElementById('upgad3').innerHTML = 'Upgrade + 100 cpc $' + String(moneyreq3);
  } else if (money < moneyreq3) {
    document.getElementById('upgad3').innerHTML = 'Not Enough Money!';
    setTimeout(() => {   
      document.getElementById('upgad3').innerHTML = 'Upgrade + 100 cpc $' + String(moneyreq3);
    }, 500);
  }
}

function BuyCPSupgrade1() {
  if (idleval1 <= money) {
    money -= idleval1
    idleval1 += 10;
    moneypersec += 1;
    document.getElementById("iiu1p").innerHTML = idleval1;
    document.getElementById("money").innerHTML = money;
  }
  else if (money < moneyreq3) {
    document.getElementById('cps1').innerHTML = 'Not Enough Money!';
    setTimeout(() => {   
      document.getElementById('cps1').innerHTML = 'Idle Cookies + 1, $' + String(idleval1);
  }, 500);
  }
}

function BuyCPSupgrae2() {
  if (idleval2 <= money) {
    money -= idleval2
    idleval2 += 100;
    moneypersec += 10;
    document.getElementById("iiu2p").innerHTML = idleval2;
    document.getElementById("money").innerHTML = money;
  }
  else if (money < moneyreq3) {
    document.getElementById('cps2').innerHTML = 'Not Enough Money!';
    setTimeout(() => {   
      document.getElementById('cps2').innerHTML = 'Idle Cookies + 10, $' + String(idleval2);
  }, 500);
  }
}
  
function updatemoney() {
  document.getElementById("CookiesPerSec").innerHTML = moneypersec;
  money += moneypersec; // Increase money by moneypersec every second
  document.getElementById('money').innerHTML = String(money);
}


function startmoneyupdate() {
  setInterval(updatemoney, 1000);
}

startmoneyupdate();
