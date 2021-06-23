import React from "react";
import { Modal } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"

const ModalAuctions = (props) => {
  const { user: currentUser } = useSelector((state) => state.auth);
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          {
            !currentUser ? (
              <>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                      Vous n'êtes pas connecté.
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h4>Vous devez vous identifier pour pouvoir enchérir.</h4>
                  <p>
                    Si vous n'êtes pas encore inscrit.e, bénéficiez de 5Bb's offerts pour tester gratuitement !
                  </p>
                </Modal.Body>
                <Modal.Footer>
                      <Link className="nav-link btn btn-warning" to="/auth/connexion" >
                                  Je me connecte
                      </Link>
                      <p>OU</p>
                      <Link className="nav-link btn btn-warning" to="/auth/inscription" >
                                  Je m'inscris
                      </Link>
                </Modal.Footer>
              </>
            ) : (
              <>
              <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Vous n'avez plus de Bb's.
                  </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>
                  Refaites vite votre stock de Bb's pour ne pas rater cette enchère !!
                </p>
              </Modal.Body>
              <Modal.Footer>
                    <Link className="nav-link btn btn-warning" to="/acheter-des-bbs" >
                                J'achète des Bb's
                    </Link>
              </Modal.Footer>
            </>
            )
          }
          
        </Modal>
      );
}

export default ModalAuctions