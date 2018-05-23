<template>
  <div @mouseleave="mouseLeave">
    <div class="jumbotron jumbotron-fluid text-white mb-0">
      <div class="container">
        <Magnet :magnet="magnet" redirect="true" campaign_token="pfC4"/>
        <!-- <div class="row">
          <div class="col"><img src="../assets/logo.png" class="logo" width="110"></div>
        </div> -->
        <h1 class="header-title mb-4">Внедрите бизнес-процессы в вашей компании<br>за 4 месяца по методике Русский Менеджмент</h1>
        <ul class="mb-4 check-mark">
          <p><h4><span class="text-danger">&#10004;</span> Комплект из 3 мастер-классов и 9 методических материалов</h4></p>
          <p><h4><span class="text-danger">&#10004;</span> Внедрено в 20000 российских компаний</h4></p>
          <p><h4><span class="text-danger">&#10004;</span> Более 15 лет опыта на российском рынке</h4></p>
        </ul>
        
        <!-- <h1 class="display-4 d-none d-sm-block text-uppercase"><strong>Купить со скидкой 92%</strong></h1>
        <h1 class="display-5 d-sm-none text-uppercase"></h1> -->
        <div class="row">
          <div class="col-md-6 mb-4">
            <h3 class="mb-4"><del>12000 рублей</del> <span class="badge badge-light">990-</span></h3>
            <Payment
                    WMI_PAYMENT_AMOUNT="990"
                    WMI_DESCRIPTION="iTeam"
                    WMI_SUCCESS_URL="https://iteam.ru/promo/bundles/processes"
                    WMI_FAIL_URL="https://iteam.ru/promo/bundles/processes"
                    campaign_token="nll1c"
                    product_name="КОМПЛЕКТ «БИЗНЕС-ПРОЦЕССЫ»"
                  />
            <!-- <a href="#" class="btn btn-danger btn-lg text-uppercase" @click.prevent="scrollMeTo('join-block')">Купить со скидкой 92%</a> -->
          </div>
          <div class="col-md-6">
            <p class="lead font-weight-bold">До конца акции</p>
            <p><Countdown :deadline="deadline()"></Countdown></p>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid mb-0" style="margin-top: -20px;">
      <div class="row">
        <div class="col-lg-3 p-0 d-none d-lg-block"><img src="https://iteam.ru/img/V2/rm_bg.jpg" class="img-fluid" style="margin-left: -10px;"></div>
        <div class="col-lg-9 py-5 align-self-center">
          <!-- <h2>Компания iTeam и Александр Кочнев</h2>
          <p class="lead">представляют вам комплект из трех материалов, которые помогут вывести вашу компанию в будущее:</p> -->
          <div class="row">
            <div class="col-md-4 col-sm-6 p-1">
              <div class="card h-100">
                <div class="card-body p-2 text-center">
                  <img src="https://iteam.ru/promo/2018/assets/img/mk4.jpg" width="60%" class="img-fluid">
                  <p class="m-0 font-weight-bold">&laquo;Как создать систему управления процессами за&nbsp;4&nbsp;месяца&raquo;</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 p-1">
              <div class="card h-100">
                <div class="card-body p-2 text-center">
                  <img src="https://iteam.ru/promo/2018/assets/img/mk5.jpg" width="60%" class="img-fluid">
                  <p class="m-0 font-weight-bold">&laquo;Как улучшить бизнес-процессы компании&raquo;</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-12 p-1">
              <div class="card h-100">
                <div class="card-body p-2 text-center">
                  <img src="https://iteam.ru/promo/2018/assets/img/mk6.jpg" width="63%" class="img-fluid">
                  <p class="m-0 font-weight-bold">&laquo;Как найти и&nbsp;укрепить слабое звено в&nbsp;цепи процессов&raquo;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid bg-dark" style="margin-top: -20px;">
      <div class="container text-light">
        <div class="row py-3">
          <div class="col text-center">
            <h2>КОМПЛЕКТ ИЗ 3-X КУРСОВ</h2>
          </div>
        </div>
      </div>    

      <div class="container">
        <div class="row last-row">
          <div class="col p-0">
            <ul class="nav nav-tabs nav-tabs-links justify-content-center" id="myTab" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" id="first-tab" data-toggle="tab" href="#first" role="tab" aria-controls="first" aria-selected="true"><h2>1</h2></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="second-tab" data-toggle="tab" href="#second" role="tab" aria-controls="second" aria-selected="false"><h2>2</h2></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="third-tab" data-toggle="tab" href="#third" role="tab" aria-controls="third" aria-selected="false"><h2>3</h2></a>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active" id="first" role="tabpanel" aria-labelledby="first-tab">
                <div class="card">
                  <h5 class="card-header bg-white">Мастер-класс &laquo;Как создать систему управления процессами за&nbsp;4&nbsp;месяца&raquo;</h5>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-3"><img src="https://iteam.ru/promo/2018/assets/img/mk4.jpg" class="img-fluid"></div>
                      <div class="col-md-9 p-0">
                        <p class="card-text">
                          Каждая компания состоит из&nbsp;процессов, преобразующих ресурсы в&nbsp;результаты, востребованные клиентами. Но&nbsp;лишь немногие компании добиваются повышения эффективности с&nbsp;помощью процессного подхода к&nbsp;управлению. Мы&nbsp;даем ключ к&nbsp;овладению мастерством управления процессами.
                        </p>
                        <p class="card-text">
                          <strong>Дополнительные материалы:</strong>
                          <ul>
                            <li>Рабочая тетрадь в&nbsp;формате PDF.</li>
                            <li>Mетодика оценки системы управления процессами вашей компании.</li>
                            <li>Шаблон &laquo;Оценки системы управления процессами&raquo;.</li>
                            <li>Видеозапись мастер-класса.</li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="second" role="tabpanel" aria-labelledby="second-tab">
                <div class="card">
                  <h5 class="card-header bg-white">Мастер-класс &laquo;Как улучшить бизнес-процессы компании&raquo;</h5>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-3"><img src="https://iteam.ru/promo/2018/assets/img/mk5.jpg" class="img-fluid"></div>
                      <div class="col-md-9 p-0">
                        <p class="card-text">
                          Всё, что производит компания, все её&nbsp;продукты и&nbsp;услуги&nbsp;&mdash; это результаты бизнес-процессов, то&nbsp;есть последовательность определенных действий с&nbsp;запланированным итогом. Понятная пошаговая система. Подходит для любого бизнеса. Метод внедрения бизнес-процессов, доступный для понимания любого менеджера.
                        </p>
                        <p class="card-text"><strong>Основная цель мастер-класса:</strong> добиться наибольшей продуктивности компании, за счет улучшения и оптимизации бизнес-процессов.</p>
                        <p class="card-text">
                          <strong>Дополнительные материалы:</strong>
                          <ul>
                            <li>Рабочая тетрадь в&nbsp;формате PDF.</li>
                            <li>Видеозапись мастер-класса.</li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="third" role="tabpanel" aria-labelledby="third-tab">
                <div class="card">
                  <h5 class="card-header bg-white">Мастер-класс &laquo;Как найти и&nbsp;укрепить слабое звено в&nbsp;цепи процессов&raquo;</h5>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-3"><img src="https://iteam.ru/promo/2018/assets/img/mk6.jpg" class="img-fluid"></div>
                      <div class="col-md-9 p-0">
                        <p class="card-text">
                          Вы&nbsp;изучите и&nbsp;научитесь использовать базовые понятия и&nbsp;методики, применяемыми при построении бизнес-процессов: измерение вариабельности (изменчивости) процессов, нахождении слабого звена в&nbsp;цепи процессов, оценки уровня зрелости процессов.
                        </p>
                        <p class="card-text">
                          <strong>Дополнительные материалы:</strong>
                          <ul>
                            <li>Презентация мастер-класса &laquo;Совершенствование бизнес-процессов и&nbsp;структур компании&raquo;.</li>
                            <li>Определение слабого звена.</li>
                            <li>Как найти слабое звено в&nbsp;бизнес-процессах.</li>
                            <li>Практическое руководство по&nbsp;определению слабого звена.</li>
                            <li>Шаблон для проведения голосования.</li>
                          </ul>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row text-center" ref="join-block">
        <div class="col">
          <h2>Получить со скидкой 92%</h2>
        </div>
      </div>
      <div class="row last-row text-center justify-content-center">

        <div class="col-xl-6 col-md-8 mt-2">
          <div class="card border-danger card-accent h-100">
            <div class="card-header bg-danger text-light">
              <span class="lead text-uppercase"><strong>КОМПЛЕКТ &laquo;Бизнес-процессы&raquo;</strong></span><br>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Видеозаписи 3 мастер-классов.</li>
              <li class="list-group-item">Презентационные материалы.</li>
              <li class="list-group-item">Методические материалы, шаблоны, образцы документов.</li>
            </ul>
            <div class="card-body"></div>
            <div class="card-footer bg-white border-top-0 pb-3">
              <h3 class="mb-4"><del>12000 рублей</del></h3>
              <h2><span class="badge badge-primary">990-</span></h2>
              <Payment
                WMI_PAYMENT_AMOUNT="990"
                WMI_DESCRIPTION="iTeam"
                WMI_SUCCESS_URL="https://iteam.ru/promo/bundles/processes"
                WMI_FAIL_URL="https://iteam.ru/promo/bundles/processes"
                campaign_token="nll1c"
                product_name="КОМПЛЕКТ «БИЗНЕС-ПРОЦЕССЫ»"
              />
            </div>
          </div>
        </div>
        
      </div>

      <div class="row last-row" style="margin-top:80px; font-family: 'Playfair Display', serif;">
        <div class="col-md-3" style="margin-bottom:20px;">
          <img class="img-fluid" src="../assets/kochnev.jpg">
        </div>
        <div class="col-md-9">
          <h3 style="margin-bottom:20px;">Ведущий наставник проекта&nbsp;&mdash; управляющий партнер iTeam Александр Кочнев. 15&nbsp;лет помогает компаниям выйти на&nbsp;новый уровень.</h3>
          <p><img class="img-fluid" src="../assets/client_logos.jpg"></p>
        </div>
      </div>

      <div class="row text-center">
        <div class="col">
          <h2>Отзывы наших участников:</h2>
        </div>
      </div>
      <div class="row text-center last-row">
        <div class="col-md-6">
          <h5>Александр Красный, &laquo;ГаРус&raquo;</h5>
            <p><a href="http://groupautorus.ru/" target="_blank"><img src="https://iteam.ru/landing/template/img/logo_garus.png" class="img-fluid rounded"></a></p>
            <div class="embed-responsive embed-responsive-16by9" style="margin-bottom:30px;">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/Rp4Jh-DP7is" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
        <div class="col-md-6">
          <h5>Александр Соловьев, &laquo;FIS&raquo;</h5>
          <p><a href="http://neofood.de/" target="_blank"><img src="https://iteam.ru/landing/template/img/logo_neofood.png" class="img-fluid rounded"></a></p>
          <div class="embed-responsive embed-responsive-16by9" style="margin-bottom:30px;">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/U4QFO0ILnmE" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <div class="col-md-6">
          <h5>Геннадий Черкасов, &laquo;Миг Плюс&raquo;</h5>
          <p><a href="http://migplus.ru/" target="_blank"><img src="https://iteam.ru/landing/template/img/logo_migplus.png" class="img-fluid rounded"></a></p>
          <div class="embed-responsive embed-responsive-16by9" style="margin-bottom:30px;">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/C2MVqTRj40w" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <div class="col-md-6">
          <h5>Яна Ходак, &laquo;МК&nbsp;Практик&raquo;</h5>
          <p><a href="http://practicmed.ru/" target="_blank"><img src="https://iteam.ru/landing/template/img/logo_mkpraktik.png" class="img-fluid rounded"></a></p>
          <div class="embed-responsive embed-responsive-16by9" style="margin-bottom:30px;">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/rlzpDK1my58" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </div>

      <div class="row text-center">
        <div class="col">
          <h2>FAQ</h2>
        </div>
      </div>
      <div class="row last-row">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-4">
                  <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Какие методы оплаты доступны?</a>
                    <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Оплата на&nbsp;вашем сайте безопасна?</a>
                    <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Вы&nbsp;принимаете карты стран СНГ?</a>
                  </div>
                </div>
                <div class="col-sm-8">
                  <div class="tab-content" id="v-pills-tabContent">
                    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                      <p>Мы&nbsp;осуществляем оплату с&nbsp;помощью платежного сервиса WalletOne. Вы&nbsp;можете оплатить продукт практически любым доступным сегодня способом. Все способы вы&nbsp;можете <a href="https://www.walletone.com/ru/merchant/payments/#country=RU&amp;section=cash" target="_blank">увидеть здесь.</a></p>
                    </div>
                    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                      <p>Wallet One использует стандарт безопасности PCI&nbsp;DSS, SSL-протокол, системы безопасности Verified by&nbsp;Visa и&nbsp;MasterCard SecureCode.</p>
                      <p><a href="https://www.walletone.com/ru/merchant/security/" target="_blank">Подробнее здесь</a></p>
                    </div>
                    <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                      <p>Да, мы&nbsp;принимаем карты, выпущенные на&nbsp;территории Украины, Беларуси, Казахстана и&nbsp;ряда других стран. Список всех стран и&nbsp;вариантов оплаты можно <a href="https://www.walletone.com/ru/merchant/payments/#country=RU&amp;section=cash" target="_blank">увидеть по&nbsp;ссылке</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script src="./home.js"></script>

<style scoped>
.check-mark {
    color:#fff;
    font-family: sans-serif;
}
.row {
    margin: 0px;
}
.row:before, row:after {
    display: none;
}
.header-title {
  margin-top: 30px;
}
.header-date {
  margin-top: 20px;
  margin-bottom: 10px;
}
.badge {
  font-size: 1.1em;
}
.last-row {
  margin-bottom: 50px;
}
h2 {
  margin-bottom: 20px;
}
.jumbotron {
  padding-top: 20px;
  background-image: url("../assets/bg.jpg");
  background-size: cover;
}
.container-fluid {
  padding: 20px 10px;
  margin-bottom: 50px;
}
.nav-tabs-links a {
  color: #fff;
  text-decoration: underline;
}
.logo {
  margin-bottom: 20px;
}
.card-accent {
  box-shadow: 0 0 20px rgba(0,0,0,0.3);
  border-width: 2px;
}
.mp-is-block {
  background-image: url("../assets/mp.jpg");
  background-size: cover;
  min-height: 150px;
}
.mp-is-usefull-block {
  background-image: url("../assets/usefull.jpg");
  background-size: cover;
}


@media (max-width: 767.98px) {
  .header-title {
    margin-top: 20px;
  }
}
@media (max-width: 575.98px) {
  .header-title {
    margin-top: 10px;
  }
}
</style>
