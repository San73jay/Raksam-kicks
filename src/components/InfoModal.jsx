import { createElement as h } from "react";
import Modal from "./Modal.jsx";
import { INFO } from "../data/content.js";

function InfoModal({id,onClose}){const d=INFO[id];return h(Modal,{onClose,label:d[0]},h("h2",null,d[0]),d[1].map((t,k)=>h("p",{key:k},t)))}

export default InfoModal;
