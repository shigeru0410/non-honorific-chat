$(function () {
  function buildHTML(message) {
    if (message.image) {
      let html = `<div class="middle-items" data-message-id=${message.id}>
        <div class="middle-items__right">
          <div class="middle-items__info">
            <div class="middle-items__info__name">
              ${message.user_name}
            </div>
            <div class="middle-items__info__date">
              ${message.created_at}
            </div>
          </div>
          <div class="middle-items__message">
            <p class="middle-items__message__text">
            ${message.content}
            </p>
            <img class="middle-items__message__image" src="${message.image}">
          </div>
        </div>
      </div>`;
      return html;
    } else {
      let html = `<div class="middle-items" data-message-id=${message.id}>
        <div class="middle-items__right">
          <div class="middle-items__info">
            <div class="middle-items__info__name">
              ${message.user_name}
            </div>
            <div class="middle-items__info__date">
              ${message.created_at}
            </div>
          </div>
          <div class="middle-items__message">
            <p class="middle-items__message__text">
              ${message.content}
            </p>
          </div>
        </div>
      </div>`;
      return html;
    }
  }

  let reloadMessages = function () {
    let last_message_id = $(".middle-items:last").data("message-id");
    $.ajax({
      url: "api/messages",
      type: "get",
      dataType: "json",
      data: { id: last_message_id },
    }).done(function (messages) {
      if (messages.length !== 0) {
        let insertHTML = "";
        $.each(messages, function (i, message) {
          insertHTML += buildHTML(message);
        });
        $(".chat-main__message-list").append(insertHTML);
        $(".chat-main__message-list").animate({
          scrollTop: $(".chat-main__message-list")[0].scrollHeight,
        });
      }
    });
  };
  setInterval(reloadMessages, 7000);
});
