import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import TableList from "../elements/TableList";
import Image from "../elements/Image";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

// data
const PRODUCTS = [
  {
    category: "admin",
    name: "/admin",
    explanation: "Time2Study 설정 및 통계 확인 등 관리자 권한 수행",
    contents: (
      <div>
        <span className="text-color-primary">
          <b>사용법</b>
        </span>{" "}
        : <code>/admin</code>
        <br></br>
        <br></br>
        <span className="text-color-primary">
          <b>설명</b>
        </span>{" "}
        : <code>/admin</code> 명령을 입력한 후, 출력되는 하위 명령 리스트에서
        수행할 세부 명령을 선택하세요.
        <br></br>하위 명령에는 <code>전체 멤버 공부 통계 보기</code>,{" "}
        <code>자동 통계 보고 설정</code>, <code>Time2Study용 채널 설정</code>이
        있습니다.<br></br>
        <br></br>
        <span className="text-color-primary">
          <b>하위 명령 설명</b>
        </span>{" "}
        :
        <ul>
          <li>
            <code>전체 멤버 공부 통계 보기</code> - 전체 멤버들의 이번 주 공부
            목표 달성 여부를 확인합니다.
          </li>
          <li>
            <code>자동 통계 보고 설정</code> -{" "}
            <code>전체 멤버 공부 통계 보기 기능</code> 및 <code>/fame</code>{" "}
            기능을 매 주 월요일 오전 8시에 자동으로 실행합니다.{" "}
            <span className="text-color-primary">
              (Time2Study용 채널이 먼저 설정되어 있어야 합니다)
            </span>
          </li>
          <li>
            <code>Time2Study용 채널 설정</code> - Time2Study가 보고를 할 때에
            사용할 채널을 설정합니다.
          </li>
        </ul>
      </div>
    ),
  },
  {
    category: "information",
    name: "/info",
    explanation: "이번 주 공부 통계, 목표 공부 시간 등 사용자의 정보 출력",
    contents: (
      <div>
        <span className="text-color-primary">
          <b>사용법</b>
        </span>{" "}
        : <code>/info</code>
        <br></br>
        <br></br>
        <span className="text-color-primary">
          <b>설명</b>
        </span>{" "}
        : <code>/info</code> 명령을 입력하면, 사용자의{" "}
        <code>목표 공부 시간</code>, <code>오늘 공부한 시간</code>,{" "}
        <code>쉬는 요일</code>, <code>이번주 통계</code>를 확인할 수 있습니다.
        <br></br>
        아래에 있는 다음 버튼을 클릭할 경우, 사용자가 현재까지 획득한{" "}
        <code>뱃지</code>를 확인할 수 있습니다.
        <br></br>
        <br></br>
      </div>
    ),
  },
  {
    category: "information",
    name: "/fame",
    explanation: "사용자가 속해있는 서버의 랭킹 정보 출력",
    contents: (
      <div>
        <span className="text-color-primary">
          <b>사용법</b>
        </span>{" "}
        : <code>/fame</code>
        <br></br>
        <br></br>
        <span className="text-color-primary">
          <b>설명</b>
        </span>{" "}
        : <code>/fame</code> 명령을 입력하면, 사용자가 속해 있는 서버의 명예의
        전당을 확인할 수 있습니다.<br></br>명예의 전당에서는{" "}
        <code>가장 많이 목표를 달성한 사람</code>,{" "}
        <code>가장 많이 공부한 사람</code>, <code>종합 순위</code>를 확인할 수
        있습니다.
        <br></br>
        <br></br>
        <span className="text-color-primary">
          <b>세부항목 설명</b>
        </span>{" "}
        :{" "}
        <ul>
          <li>
            <code>가장 많이 목표를 달성한 사람</code> - 목표 공부 시간을 가장
            많이 달성한 사람으로서, 매주 월요일 오전 8시를 기준으로 갱신됩니다.
          </li>
          <li>
            <code>가장 많이 공부한 사람</code> - 총 공부 시간 합산량이 가장 많은
            사람입니다.
          </li>
          <li>
            <code>종합 순위</code> - 목표 달성 성공 횟수와 총 공부 시간을
            기준으로 특정한 계산식에 의해 결정됩니다.
          </li>
        </ul>
        <br></br>
        <br></br>
      </div>
    ),
  },
  {
    category: "setting",
    name: "/time",
    explanation: "목표 공부 시간 설정",
    contents: (
      <div>
        <span className="text-color-primary">
          <b>사용법</b>
        </span>{" "}
        : <code>/time</code>
        <br></br>
        <br></br>
        <span className="text-color-primary">
          <b>설명</b>
        </span>{" "}
        : <code>/time</code> 명령을 입력한 후, 새로 표시되는 입력창에 하루동안
        공부할 목표 공부 시간을 숫자로 입력하세요.<br></br>
        <span className="text-color-primary">(소수점은 지원하지 않습니다)</span>
        <br></br>
        <br></br>
      </div>
    ),
  },
  {
    category: "setting",
    name: "/skip add",
    explanation: "쉬는 요일 추가",
    contents: (
      <div>
        <span className="text-color-primary">
          <b>사용법</b>
        </span>{" "}
        : <code>/skip add</code>
        <br></br>
        <br></br>
        <span className="text-color-primary">
          <b>설명</b>
        </span>{" "}
        : <code>/skip add</code> 명령을 입력한 후, 새로 표시되는 입력창의
        메뉴에서 쉬고 싶은 요일을 선택하고 메뉴를 닫아주세요.<br></br>여러개의
        요일을 선택할 수 있으며, 현재 등록되어 있는 쉬는 요일은 새로 표시된
        입력창의 <code>나의 쉬는 요일</code>
        에서 확인할 수 있습니다.
        <br></br>
        <br></br>
      </div>
    ),
  },
  {
    category: "setting",
    name: "/skip delete",
    explanation: "쉬는 요일 삭제",
    contents: (
      <div>
        <span className="text-color-primary">
          <b>사용법</b>
        </span>{" "}
        : <code>/skip delete</code>
        <br></br>
        <br></br>
        <span className="text-color-primary">
          <b>설명</b>
        </span>{" "}
        : <code>/skip delete</code> 명령을 입력한 후, 새로 표시되는 입력창의
        메뉴에서 해제하고 싶은 쉬는 요일을 선택하고 메뉴를 닫아주세요.<br></br>
        여러개의 요일을 선택할 수 있으며, 현재 등록되어 있는 쉬는 요일은 새로
        표시된 입력창의 <code>나의 쉬는 요일</code> 에서 확인할 수 있습니다.
        <br></br>
        <br></br>
      </div>
    ),
  },
];

// get unique category items
const uniqueItems = (x, i, array) => array.indexOf(x) === i;
const PRODUCT_CATEGORIES = PRODUCTS.map(prod => prod.category).filter(
  uniqueItems
);

PRODUCT_CATEGORIES.sort();
PRODUCT_CATEGORIES.unshift("all");

const CommandsSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div
          className="reveal-from-bottom illustration-element-01"
          data-reveal-value="20px"
          data-reveal-delay="800"
          style={{ justifyContent: "center", display: "flex" }}
        >
          <Image
            className="has-shadow"
            src={require("./../../assets/images/chat-text-front-gradient.png")}
            alt="Hero"
            width={300}
            height={304}
          />
        </div>
        <div className={innerClasses}>
          <div className="reveal-from-bottom" data-reveal-delay="200">
            <TableList
              products={PRODUCTS}
              productCategories={PRODUCT_CATEGORIES}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

CommandsSplit.propTypes = propTypes;
CommandsSplit.defaultProps = defaultProps;
export default CommandsSplit;
