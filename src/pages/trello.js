import React from "react";

const API_ROOT = "https://api.trello.com/1/card/";
const CARD_QUERY = `?fields=name,closed,url,badges,idAttachmentCover,labels&attachments=cover&customFields=true&customFieldItems=true&members=true&stickers=true&key=${API_KEY}&token=${API_TOKEN}`;

let card;
fetch(`${API_ROOT}${idCard}${CARD_QUERY}`) 
  .then((resp) => resp.json())
  .then((cardData) => (card = cardData));



class TrelloCardWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.setRef = this.setRef.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onLabelTextChanged = this.onLabelTextChanged.bind(this);
  }

  componentDidMount() {
    if (!this.el) {
      return;
    }
    this.el.card = this.props.card;
    this.el.addEventListener("click", this.onClick);
    this.el.addEventListener("labelTextChanged", this.onLabelTextChanged);
  }

  componentDidUpdate() {
    if (!this.el) {
      return;
    }
    this.el.card = this.props.card;
  }

  onClick(e) {
    if (typeof this.props.onClick === "function") {
      e.preventDefault();
      this.props.onClick();
    }
  }

  onLabelTextChanged(e) {
    if (typeof this.props.onLabelTextChanged === "function") {
      this.props.onLabelTextChanged(e.detail.labeltext);
    }
  }

  setRef(el) {
    this.el = el;
  }

  render() {
    return (
      <trello-card
        ref={this.setRef}
        colorblind={this.props.colorblind}
        labeltext={this.props.labelText}
      />
    );
  }
}


