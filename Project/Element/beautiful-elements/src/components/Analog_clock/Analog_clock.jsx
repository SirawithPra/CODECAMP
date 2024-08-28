import React, { useEffect } from 'react';
import './Analog_clock.css';

const AnalogClock = () => {
    useEffect(() => {
        const clockElement = document.querySelector(".clock");
        const clockInstance = new Clock23(clockElement);

        return () => {
            // Cleanup the interval on component unmount
            clockInstance.cleanup();
        };
    }, []);

    class Clock23 {
        fullClass = "full";

        constructor(el) {
            this.el = el;
            this.init();
        }

        init() {
            this.timeUpdate();
        }

        get timeAsObject() {
            const date = new Date();
            const h = date.getHours();
            const m = date.getMinutes();
            const s = date.getSeconds();

            return { h, m, s };
        }

        get timeAsString() {
            const [h, m, s, ap] = this.timeDigitsGrouped;

            return `${h}:${m}:${s} ${ap}`;
        }

        get timeDigitsGrouped() {
            let { h, m, s } = this.timeAsObject;
            const ap = h > 11 ? "PM" : "AM";
            if (h === 0) h += 12;
            else if (h > 12) h -= 12;
            if (m < 10) m = `0${m}`;
            if (s < 10) s = `0${s}`;

            return [h, m, s, ap];
        }

        checkFills(hands) {
            for (let hand of hands) {
                const unit = this.el?.querySelector(`[data-unit="${hand.name}"]`);

                if (hand.fraction === 0)
                    unit?.classList.add(this.fullClass);
            }
        }

        clearFills() {
            const fills = Array.from(this.el?.querySelectorAll("[data-unit]"));

            for (let fill of fills)
                fill.classList.remove(this.fullClass);
        }

        timeUpdate() {
            this.el?.setAttribute("aria-label", this.timeAsString);
            const time = this.timeAsObject;
            const minFraction = time.s / 60;
            const hrFraction = (time.m + minFraction) / 60;
            const twelveHrFraction = (time.h % 12 + hrFraction) / 12;
            const hands = [
                { name: "h", fraction: twelveHrFraction, value: 376.99 },
                { name: "m", fraction: hrFraction, value: 578.05 },
                { name: "s", fraction: minFraction, value: 779.11 }
            ];
            const activeClass = "active";

            for (let hand of hands) {
                this.el?.style.setProperty(
                    `--${hand.name}Offset`,
                    Utils.decPlaces(hand.value * (1 - hand.fraction), 3)
                );

                const unit = this.el?.querySelector(`[data-unit="${hand.name}"]`);
                const ticks = Array.from(unit?.querySelectorAll("[data-value]"));

                for (let tick of ticks) {
                    const dataValue = +tick.getAttribute("data-value");
                    let timeValue = time[hand.name];

                    if (hand.name === "h")
                        timeValue %= 12;

                    if (dataValue <= timeValue)
                        tick.classList.add(activeClass);
                    else
                        tick.removeAttribute("class");
                }
            }
            this.checkFills(hands);

            clearTimeout(this.clearFillsLoop);
            this.clearFillsLoop = setTimeout(this.clearFills.bind(this), 600);
            clearTimeout(this.timeUpdateLoop);
            this.timeUpdateLoop = setTimeout(this.timeUpdate.bind(this), 1e3);
        }

        cleanup() {
            clearTimeout(this.clearFillsLoop);
            clearTimeout(this.timeUpdateLoop);
        }
    }

    class Utils {
        static decPlaces(n, d) {
            return Math.round(n * 10 ** d) / 10 ** d;
        }
    }
    return (
        <div className='main-clock'>
            <svg class="clock" viewBox="0 0 256 256" width="256px" height="256px" role="img">
                <g fill="none" text-anchor="middle" transform="translate(128,128)">
                    <g data-unit="s">
                        <g stroke-linecap="round" stroke-width="8" transform="rotate(-90)">
                            <circle class="clock__progress-track" stroke="hsla(223,90%,50%,0.3)" r="124" />
                            <circle class="clock__progress" stroke="hsl(223,90%,50%)" stroke-dasharray="779.11 779.11"
                                r="124" />
                        </g>
                        <g fill="currentcolor" font-size="12" transform="translate(0,5)">
                            <text data-value="0" transform="translate(0,-110)">0</text>
                            <text data-value="5" transform="rotate(30) translate(0,-110) rotate(-30)">5</text>
                            <text data-value="10" transform="rotate(60) translate(0,-110) rotate(-60)">10</text>
                            <text data-value="15" transform="rotate(90) translate(0,-110) rotate(-90)">15</text>
                            <text data-value="20" transform="rotate(120) translate(0,-110) rotate(-120)">20</text>
                            <text data-value="25" transform="rotate(150) translate(0,-110) rotate(-150)">25</text>
                            <text data-value="30" transform="rotate(180) translate(0,-110) rotate(-180)">30</text>
                            <text data-value="35" transform="rotate(210) translate(0,-110) rotate(-210)">35</text>
                            <text data-value="40" transform="rotate(240) translate(0,-110) rotate(-240)">40</text>
                            <text data-value="45" transform="rotate(270) translate(0,-110) rotate(-270)">45</text>
                            <text data-value="50" transform="rotate(300) translate(0,-110) rotate(-300)">50</text>
                            <text data-value="55" transform="rotate(330) translate(0,-110) rotate(-330)">55</text>
                        </g>
                        <g stroke="currentcolor" stroke-linecap="round" stroke-width="2">
                            <line data-value="1" x1="0" y1="0" x2="0" y2="8" transform="rotate(6) translate(0,-116)" />
                            <line data-value="2" x1="0" y1="0" x2="0" y2="8" transform="rotate(12) translate(0,-116)" />
                            <line data-value="3" x1="0" y1="0" x2="0" y2="8" transform="rotate(18) translate(0,-116)" />
                            <line data-value="4" x1="0" y1="0" x2="0" y2="8" transform="rotate(24) translate(0,-116)" />
                            <line data-value="6" x1="0" y1="0" x2="0" y2="8" transform="rotate(36) translate(0,-116)" />
                            <line data-value="7" x1="0" y1="0" x2="0" y2="8" transform="rotate(42) translate(0,-116)" />
                            <line data-value="8" x1="0" y1="0" x2="0" y2="8" transform="rotate(48) translate(0,-116)" />
                            <line data-value="9" x1="0" y1="0" x2="0" y2="8" transform="rotate(54) translate(0,-116)" />
                            <line data-value="11" x1="0" y1="0" x2="0" y2="8" transform="rotate(66) translate(0,-116)" />
                            <line data-value="12" x1="0" y1="0" x2="0" y2="8" transform="rotate(72) translate(0,-116)" />
                            <line data-value="13" x1="0" y1="0" x2="0" y2="8" transform="rotate(78) translate(0,-116)" />
                            <line data-value="14" x1="0" y1="0" x2="0" y2="8" transform="rotate(84) translate(0,-116)" />
                            <line data-value="16" x1="0" y1="0" x2="0" y2="8" transform="rotate(96) translate(0,-116)" />
                            <line data-value="17" x1="0" y1="0" x2="0" y2="8" transform="rotate(102) translate(0,-116)" />
                            <line data-value="18" x1="0" y1="0" x2="0" y2="8" transform="rotate(108) translate(0,-116)" />
                            <line data-value="19" x1="0" y1="0" x2="0" y2="8" transform="rotate(114) translate(0,-116)" />
                            <line data-value="21" x1="0" y1="0" x2="0" y2="8" transform="rotate(126) translate(0,-116)" />
                            <line data-value="22" x1="0" y1="0" x2="0" y2="8" transform="rotate(132) translate(0,-116)" />
                            <line data-value="23" x1="0" y1="0" x2="0" y2="8" transform="rotate(138) translate(0,-116)" />
                            <line data-value="24" x1="0" y1="0" x2="0" y2="8" transform="rotate(144) translate(0,-116)" />
                            <line data-value="26" x1="0" y1="0" x2="0" y2="8" transform="rotate(156) translate(0,-116)" />
                            <line data-value="27" x1="0" y1="0" x2="0" y2="8" transform="rotate(162) translate(0,-116)" />
                            <line data-value="28" x1="0" y1="0" x2="0" y2="8" transform="rotate(168) translate(0,-116)" />
                            <line data-value="29" x1="0" y1="0" x2="0" y2="8" transform="rotate(174) translate(0,-116)" />
                            <line data-value="31" x1="0" y1="0" x2="0" y2="8" transform="rotate(186) translate(0,-116)" />
                            <line data-value="32" x1="0" y1="0" x2="0" y2="8" transform="rotate(192) translate(0,-116)" />
                            <line data-value="33" x1="0" y1="0" x2="0" y2="8" transform="rotate(198) translate(0,-116)" />
                            <line data-value="34" x1="0" y1="0" x2="0" y2="8" transform="rotate(204) translate(0,-116)" />
                            <line data-value="36" x1="0" y1="0" x2="0" y2="8" transform="rotate(216) translate(0,-116)" />
                            <line data-value="37" x1="0" y1="0" x2="0" y2="8" transform="rotate(222) translate(0,-116)" />
                            <line data-value="38" x1="0" y1="0" x2="0" y2="8" transform="rotate(228) translate(0,-116)" />
                            <line data-value="39" x1="0" y1="0" x2="0" y2="8" transform="rotate(234) translate(0,-116)" />
                            <line data-value="41" x1="0" y1="0" x2="0" y2="8" transform="rotate(246) translate(0,-116)" />
                            <line data-value="42" x1="0" y1="0" x2="0" y2="8" transform="rotate(252) translate(0,-116)" />
                            <line data-value="43" x1="0" y1="0" x2="0" y2="8" transform="rotate(258) translate(0,-116)" />
                            <line data-value="44" x1="0" y1="0" x2="0" y2="8" transform="rotate(264) translate(0,-116)" />
                            <line data-value="46" x1="0" y1="0" x2="0" y2="8" transform="rotate(276) translate(0,-116)" />
                            <line data-value="47" x1="0" y1="0" x2="0" y2="8" transform="rotate(282) translate(0,-116)" />
                            <line data-value="48" x1="0" y1="0" x2="0" y2="8" transform="rotate(288) translate(0,-116)" />
                            <line data-value="49" x1="0" y1="0" x2="0" y2="8" transform="rotate(294) translate(0,-116)" />
                            <line data-value="51" x1="0" y1="0" x2="0" y2="8" transform="rotate(306) translate(0,-116)" />
                            <line data-value="52" x1="0" y1="0" x2="0" y2="8" transform="rotate(312) translate(0,-116)" />
                            <line data-value="53" x1="0" y1="0" x2="0" y2="8" transform="rotate(318) translate(0,-116)" />
                            <line data-value="54" x1="0" y1="0" x2="0" y2="8" transform="rotate(324) translate(0,-116)" />
                            <line data-value="56" x1="0" y1="0" x2="0" y2="8" transform="rotate(336) translate(0,-116)" />
                            <line data-value="57" x1="0" y1="0" x2="0" y2="8" transform="rotate(342) translate(0,-116)" />
                            <line data-value="58" x1="0" y1="0" x2="0" y2="8" transform="rotate(348) translate(0,-116)" />
                            <line data-value="59" x1="0" y1="0" x2="0" y2="8" transform="rotate(354) translate(0,-116)" />
                        </g>
                    </g>
                    <g data-unit="m">
                        <g stroke-linecap="round" stroke-width="8" transform="rotate(-90)">
                            <circle class="clock__progress-track" stroke="hsla(33,90%,50%,0.3)" r="92" />
                            <circle class="clock__progress" stroke="hsl(33,90%,50%)" stroke-dasharray="578.05 578.05" r="92" />
                        </g>
                        <g fill="currentcolor" font-size="8" transform="translate(0,3)">
                            <text data-value="0" transform="translate(0,-78)">0</text>
                            <text data-value="5" transform="rotate(30) translate(0,-80) rotate(-30)">5</text>
                            <text data-value="10" transform="rotate(60) translate(0,-80) rotate(-60)">10</text>
                            <text data-value="15" transform="rotate(90) translate(0,-80) rotate(-90)">15</text>
                            <text data-value="20" transform="rotate(120) translate(0,-80) rotate(-120)">20</text>
                            <text data-value="25" transform="rotate(150) translate(0,-80) rotate(-150)">25</text>
                            <text data-value="30" transform="rotate(180) translate(0,-80) rotate(-180)">30</text>
                            <text data-value="35" transform="rotate(210) translate(0,-80) rotate(-210)">35</text>
                            <text data-value="40" transform="rotate(240) translate(0,-80) rotate(-240)">40</text>
                            <text data-value="45" transform="rotate(270) translate(0,-80) rotate(-270)">45</text>
                            <text data-value="50" transform="rotate(300) translate(0,-80) rotate(-300)">50</text>
                            <text data-value="55" transform="rotate(330) translate(0,-80) rotate(-330)">55</text>
                        </g>
                        <g stroke="currentcolor" stroke-linecap="round" stroke-width="1">
                            <line data-value="1" x1="0" y1="0" x2="0" y2="6" transform="rotate(6) translate(0,-84)" />
                            <line data-value="2" x1="0" y1="0" x2="0" y2="6" transform="rotate(12) translate(0,-84)" />
                            <line data-value="3" x1="0" y1="0" x2="0" y2="6" transform="rotate(18) translate(0,-84)" />
                            <line data-value="4" x1="0" y1="0" x2="0" y2="6" transform="rotate(24) translate(0,-84)" />
                            <line data-value="6" x1="0" y1="0" x2="0" y2="6" transform="rotate(36) translate(0,-84)" />
                            <line data-value="7" x1="0" y1="0" x2="0" y2="6" transform="rotate(42) translate(0,-84)" />
                            <line data-value="8" x1="0" y1="0" x2="0" y2="6" transform="rotate(48) translate(0,-84)" />
                            <line data-value="9" x1="0" y1="0" x2="0" y2="6" transform="rotate(54) translate(0,-84)" />
                            <line data-value="11" x1="0" y1="0" x2="0" y2="6" transform="rotate(66) translate(0,-84)" />
                            <line data-value="12" x1="0" y1="0" x2="0" y2="6" transform="rotate(72) translate(0,-84)" />
                            <line data-value="13" x1="0" y1="0" x2="0" y2="6" transform="rotate(78) translate(0,-84)" />
                            <line data-value="14" x1="0" y1="0" x2="0" y2="6" transform="rotate(84) translate(0,-84)" />
                            <line data-value="16" x1="0" y1="0" x2="0" y2="6" transform="rotate(96) translate(0,-84)" />
                            <line data-value="17" x1="0" y1="0" x2="0" y2="6" transform="rotate(102) translate(0,-84)" />
                            <line data-value="18" x1="0" y1="0" x2="0" y2="6" transform="rotate(108) translate(0,-84)" />
                            <line data-value="19" x1="0" y1="0" x2="0" y2="6" transform="rotate(114) translate(0,-84)" />
                            <line data-value="21" x1="0" y1="0" x2="0" y2="6" transform="rotate(126) translate(0,-84)" />
                            <line data-value="22" x1="0" y1="0" x2="0" y2="6" transform="rotate(132) translate(0,-84)" />
                            <line data-value="23" x1="0" y1="0" x2="0" y2="6" transform="rotate(138) translate(0,-84)" />
                            <line data-value="24" x1="0" y1="0" x2="0" y2="6" transform="rotate(144) translate(0,-84)" />
                            <line data-value="26" x1="0" y1="0" x2="0" y2="6" transform="rotate(156) translate(0,-84)" />
                            <line data-value="27" x1="0" y1="0" x2="0" y2="6" transform="rotate(162) translate(0,-84)" />
                            <line data-value="28" x1="0" y1="0" x2="0" y2="6" transform="rotate(168) translate(0,-84)" />
                            <line data-value="29" x1="0" y1="0" x2="0" y2="6" transform="rotate(174) translate(0,-84)" />
                            <line data-value="31" x1="0" y1="0" x2="0" y2="6" transform="rotate(186) translate(0,-84)" />
                            <line data-value="32" x1="0" y1="0" x2="0" y2="6" transform="rotate(192) translate(0,-84)" />
                            <line data-value="33" x1="0" y1="0" x2="0" y2="6" transform="rotate(198) translate(0,-84)" />
                            <line data-value="34" x1="0" y1="0" x2="0" y2="6" transform="rotate(204) translate(0,-84)" />
                            <line data-value="36" x1="0" y1="0" x2="0" y2="6" transform="rotate(216) translate(0,-84)" />
                            <line data-value="37" x1="0" y1="0" x2="0" y2="6" transform="rotate(222) translate(0,-84)" />
                            <line data-value="38" x1="0" y1="0" x2="0" y2="6" transform="rotate(228) translate(0,-84)" />
                            <line data-value="39" x1="0" y1="0" x2="0" y2="6" transform="rotate(234) translate(0,-84)" />
                            <line data-value="41" x1="0" y1="0" x2="0" y2="6" transform="rotate(246) translate(0,-84)" />
                            <line data-value="42" x1="0" y1="0" x2="0" y2="6" transform="rotate(252) translate(0,-84)" />
                            <line data-value="43" x1="0" y1="0" x2="0" y2="6" transform="rotate(258) translate(0,-84)" />
                            <line data-value="44" x1="0" y1="0" x2="0" y2="6" transform="rotate(264) translate(0,-84)" />
                            <line data-value="46" x1="0" y1="0" x2="0" y2="6" transform="rotate(276) translate(0,-84)" />
                            <line data-value="47" x1="0" y1="0" x2="0" y2="6" transform="rotate(282) translate(0,-84)" />
                            <line data-value="48" x1="0" y1="0" x2="0" y2="6" transform="rotate(288) translate(0,-84)" />
                            <line data-value="49" x1="0" y1="0" x2="0" y2="6" transform="rotate(294) translate(0,-84)" />
                            <line data-value="51" x1="0" y1="0" x2="0" y2="6" transform="rotate(306) translate(0,-84)" />
                            <line data-value="52" x1="0" y1="0" x2="0" y2="6" transform="rotate(312) translate(0,-84)" />
                            <line data-value="53" x1="0" y1="0" x2="0" y2="6" transform="rotate(318) translate(0,-84)" />
                            <line data-value="54" x1="0" y1="0" x2="0" y2="6" transform="rotate(324) translate(0,-84)" />
                            <line data-value="56" x1="0" y1="0" x2="0" y2="6" transform="rotate(336) translate(0,-84)" />
                            <line data-value="57" x1="0" y1="0" x2="0" y2="6" transform="rotate(342) translate(0,-84)" />
                            <line data-value="58" x1="0" y1="0" x2="0" y2="6" transform="rotate(348) translate(0,-84)" />
                            <line data-value="59" x1="0" y1="0" x2="0" y2="6" transform="rotate(354) translate(0,-84)" />
                        </g>
                    </g>
                    <g data-unit="h">
                        <g stroke-linecap="round" stroke-width="8" transform="rotate(-90)">
                            <circle class="clock__progress-track" stroke="hsla(343,90%,50%,0.3)" r="60" />
                            <circle class="clock__progress" stroke="hsl(343,90%,50%)" stroke-dasharray="376.99 376.99" r="60" />
                        </g>
                        <g fill="currentcolor" font-size="12" transform="translate(0,5)">
                            <text data-value="0" transform="translate(0,-46)">12</text>
                            <text data-value="1" transform="rotate(30) translate(0,-46) rotate(-30)">1</text>
                            <text data-value="2" transform="rotate(60) translate(0,-46) rotate(-60)">2</text>
                            <text data-value="3" transform="rotate(90) translate(0,-46) rotate(-90)">3</text>
                            <text data-value="4" transform="rotate(120) translate(0,-46) rotate(-120)">4</text>
                            <text data-value="5" transform="rotate(150) translate(0,-46) rotate(-150)">5</text>
                            <text data-value="6" transform="rotate(180) translate(0,-46) rotate(-180)">6</text>
                            <text data-value="7" transform="rotate(210) translate(0,-46) rotate(-210)">7</text>
                            <text data-value="8" transform="rotate(240) translate(0,-46) rotate(-240)">8</text>
                            <text data-value="9" transform="rotate(270) translate(0,-46) rotate(-270)">9</text>
                            <text data-value="10" transform="rotate(300) translate(0,-46) rotate(-300)">10</text>
                            <text data-value="11" transform="rotate(330) translate(0,-46) rotate(-330)">11</text>
                        </g>
                    </g>
                </g>
            </svg>

            <script src="script.js"></script>
        </div>
    )
}

export default AnalogClock
