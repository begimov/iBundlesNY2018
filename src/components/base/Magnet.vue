<template>
  <div class="text-dark">
                
    <!-- Modal -->
    <div class="modal fade" :id="'magnet' + campaign_token" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title text-danger">Вам подарок!</h2>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-5 d-none d-md-block">
                <img src="https://iteam.ru/img/home_magnet_img.png" class="img-fluid">
              </div>
              <div class="col-md-7 align-self-center">
                  <form action="/grform/payment" method="get" id="grForm">
                      <div class="row">
                        <div class="col">
                          
                          <h4 class="mb-3">КНИГА &laquo;Как внедрить бизнес-процессы&raquo;!</h4>
                        </div>
                      </div>
                      <div class="row">
                          <div class="col">
                            <div class="form-group form-group-lg">
                              <input type="text" class="form-control" name="name" placeholder="Имя" v-model="modal.name">
                            </div>
                          </div>
                      </div>
                      <div class="row">
                          <div class="col">
                            <div class="form-group form-group-lg">
                              <input type="email" class="form-control" name="email" placeholder="Эл.адрес" v-model="modal.email">
                            </div>
                          </div>
                          <input type="hidden" name="campaign_token" v-model="modal.campaign_token" />
                      </div>
                      <div class="row">
                          <div class="col">
                            <div class="form-group form-group-lg">
                              <input type="text" class="form-control" name="phone" placeholder="Телефон" v-model="modal.phone">
                            </div>
                          </div>
                      </div>
                      <a href="#" class="btn btn-danger btn-lg disabled" id="grFormBtn" v-if="isLoading">ОТПРАВКА...</a>
                      <a href="#" class="btn btn-danger btn-lg" id="grFormBtn" v-else @click.prevent="register">ПОЛУЧИТЬ</a>
                  </form>
                  <p class="help-block alert-danger" id="grFormHelpBlock" v-if="error">{{ error }}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./magnet.js"></script>

<style scoped>
.help-block {
  margin-top: 20px;
  padding: 5px;
}
</style>
