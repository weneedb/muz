import React from "react";

const List = () => {
  return (
    <section id="list">
      <div className="list_button">버튼1</div>
      <div className="list_inner">
        <div className="list_title">지금뜨는</div>
        <div className="list_item1">
          <div className="list_item1_1">
            <div className="list_img">이미지</div>
            <div className="list_text">텍스트</div>
          </div>
          <div className="list_item1_2">
            <div className="list_img">이미지</div>
            <div className="list_text">텍스트</div>
          </div>
          <div className="list_item1_3">
            <div className="list_img">이미지</div>
            <div className="list_text">텍스트</div>
          </div>
        </div>
        <div className="list_title">실시간</div>
        <div className="list_item02">
          <div className="list_img">이미지</div>
          <div className="list_text">텍스트</div>
        </div>
      </div>
    </section>
  );
};

export default List;
