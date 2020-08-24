import "bootstrap/dist/css/bootstrap.min.css"
/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
// import Img from "gatsby"
import mockupImage from "../images/productImage/mockup1.jpg"
import styles from "./Product.module.css"
import { Modal, ButtonToolbar, Button } from "react-bootstrap"

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.item}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Do you wish to {props.purpose}? </p>
        <p>You are buying {props.item} </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cancel</Button>
        <Button onClick={props.onHide}>{props.purpose}</Button>
      </Modal.Footer>
    </Modal>
  )
}

const Product = ({ imgPath, productName, itemDescription, price }) => {
  const [modalShow, setModalShow] = React.useState(false)

  return (
    <div className={styles.card}>
      <div className={styles.imageNprice}>
        <img src={mockupImage} alt="coffee bag" className={styles.image} />
        <div className={styles.dot}>
          <h3 className={styles.price}>{price}</h3>
        </div>
      </div>
      <div className={styles.description}>
        <h4> {productName} </h4>
        <p className={styles.paragraph} sx={{ fontSize: [12, 14, 16] }}>
          {" "}
          {itemDescription}{" "}
        </p>
      </div>
      <div className={styles.buttons}>
        <ButtonToolbar>
          <Button
            className={styles.purchaseAdd}
            variant="primary"
            onClick={() => setModalShow(true)}
          >
            ADD TO CART
          </Button>

          <MyVerticallyCenteredModal
            purpose={"Cart"}
            item={productName}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </ButtonToolbar>
        <ButtonToolbar>
          <Button
            className={styles.purchaseBuy}
            variant="primary"
            onClick={() => setModalShow(true)}
          >
            BUY
          </Button>

          <MyVerticallyCenteredModal
            purpose={"Buy"}
            item={productName}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </ButtonToolbar>
      </div>
    </div>
  )
}

export default Product
