import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
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

  const sectionHeader = {
    title: "스터디를 위한 최적의 솔루션",
    paragraph:
      "갓생은 살고 싶지만, 어떻게 해야할지 모르겠고... 스터디 멤버는 모았지만, 내 공부하기도 바빠서 일일이 관리하기 벅차고... — 이제 이런 고민에서 벗어나세요. Time2Study가 대신 해드리겠습니다!",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  카메라 기반 자동 시간 기록
                </div>
                <h3 className="mt-0 mb-12">
                  일일이 시간 기록하는 건 이제 그만!
                </h3>
                <p className="m-0">
                  Time2Study가 여러분을 대신하여 카메라를 켜 놓은 시간을
                  자동으로 기록해줍니다. 공부할때마다 인증하고.. 시간 기록하고..
                  많이 귀찮으셨죠? 이제는 더 편하게 공부하세요
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/record-example.png")}
                  alt="Features split 01"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  각종 다양한 정보를 한 눈에
                </div>
                <h3 className="mt-0 mb-12">매 번 다이어리를 보는 것도 그만!</h3>
                <p className="m-0">
                  공부하기도 바쁜데 내가 얼마나 공부했는지, 언제 쉴건지 일일이
                  확인하고 보고할 시간이 어디있겠어요. 여러분은 간단하게
                  명령어만 입력하세요. Time2Study가 대신 알려드릴게요.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/info-example.png")}
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  편리한 관리자 기능
                </div>
                <h3 className="mt-0 mb-12">방장님도 이제 공부만 하세요</h3>
                <p className="m-0">
                  방장님들! 멤버들이 이번 주에 누가 불참했는지, 우리 스터디
                  그룹에서 가장 열심히 하는 사람은 누구인지 일일이 관리하기
                  힘드셨죠? 공부하기도 바쁜데 관리까지 하면 너무 힘들잖아요.
                  이제는 Time2Study가 대신 해드리겠습니다 :)
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/stat-example.png")}
                  alt="Features split 03"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  동기부여를 위한 뱃지 시스템
                </div>
                <h3 className="mt-0 mb-12">
                  공부가 지겨울때쯤이면 뱃지 수집을!
                </h3>
                <p className="m-0">
                  누구나 한 번씩은 공부가 지겨워질거에요. 그럴때는 수집욕을
                  불태워 뱃지를 한 번 모아보세요. Time2Study에는 숨겨져있는
                  다양한 뱃지들이 있답니다.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/badge-example.png")}
                  alt="Features split 03"
                  width={528}
                  height={396}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
