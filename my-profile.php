<?php include("header.php"); ?>

<main>
  <div class="container mt-5 bg-light rounded-3">
    <div class="row">
      <div class="col-12">
        <h1 class="pl-0 pt-3 h3">Editar Perfil</h1>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-md-auto">
        <div class="text-center">
          <img class="img-fluid img-thumbnail rounded mx-auto d-block" src="/img/profile.png" width="150" height="150" alt="Foto de Perfil">
          <button class="form-control btn btn-info btn-block my-3" type="file">Alterar Foto</button>
        </div>
      </div>
      <div class="col-md-8 mx-auto">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="true">Perfil</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contato</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="security-tab" data-bs-toggle="tab" data-bs-target="#security" type="button" role="tab" aria-controls="security" aria-selected="false">Segurança</button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <div class="mb-3 row">
              <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
              <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
              </div>
            </div>
            <div class="mb-3 row">
              <label for="access" class="col-sm-2 col-form-label">Acesso</label>
              <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" id="access" value="Administrador">
              </div>
            </div>
            <div class="mb-3 row">
              <label for="name" class="col-sm-2 col-form-label">Nome</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="name">
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
          <div class="tab-pane fade" id="security" role="tabpanel" aria-labelledby="security-tab">...</div>
        </div>
      </div>
    </div>
  </div>
  </div>
</main>

<?php include("footer.php"); ?>