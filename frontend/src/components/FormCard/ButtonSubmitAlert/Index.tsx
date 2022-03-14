import React from "react";

type Props = {
  setFinished: Function
}
const ButtonSubmitAlert = ({setFinished}: Props) => {
  return (
    <>
      <div className="dsmovie-form-btn-container">
        <button
          type="submit"
          className="btn btn-primary dsmovie-btn"
          data-toggle="modal"
          data-target="#modalExemplo"
        >
          Salvar
        </button>
        <div
          className="modal fade"
          id="modalExemplo"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Avaliação salva com sucesso!
                  <br />
                  <br />
                  Obrigado por sua participação!!!
                </h5>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={() => setFinished(true)}
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonSubmitAlert;
