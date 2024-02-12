{
    console.log("Задание 1");

    let email, blacklist;

    email = ["shiska@gmail.com", "domik@gmail.com", "Alexander@gmail.com"];
    blacklist = ["shiska@gmail.com", "Alexander@gmail.com"];

    let filter = (email, blacklist) => {
        let whitelist = [];
        
        for (let indexEmail in email) {
            count = 0;
            for (let indexBlacklist in blacklist) {
                if (email[indexEmail] == blacklist[indexBlacklist]) break;
                else if (count == blacklist.length - 1) whitelist.push(email[indexEmail]);
                else count++;
            }
        }
        return whitelist;
    }
    console.log(`Валиндные email-адреса: ${filter(email, blacklist)}`);
}

{
    console.log("Задание 2");

    let buket, promocode, sum, count;

    buket = ["Ведро", "Пакет", "Список"];
    sum = 100000;
    count = buket.length;
    promocode = "ДАРИМ300";

    let calculate = (sum, count, promocode) => {
        if (sum !== 300) {
            if (promocode == "ДАРИМ300") {
                sum -= 300
                console.log(`Применён промокод "ДАРИМ300". Текущая сумма = ${sum}`);
            }

            if (count >= 10) {
                sum = sum - sum * 0.05;
                console.log(`Применена скидка за большую корзину. Текущая сумма = ${sum}`);
            }

            if (sum >= 50000) {
                sum = (sum - 50000) - (sum - 50000) * 0.2 + 50000;
                console.log(`Применена скидка за большую сумму. Текущая сумма = ${sum}`);
            }

            if (promocode == "СКИДКА15" && sum >= 20000) {
                sum = sum - sum * 0.15;
                console.log(`Применён промокод "СКИДКА15". Текущая сумма = ${sum}`);
            }
        }
        else sum = 0;
        return sum;
    }

    console.log(`Сумма цены ваших покупок после скидок = ${calculate(sum, count, promocode)}`);
}