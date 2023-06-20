"use client";
import { curveCardinal } from "@visx/curve";
import {
  AreaSeries,
  Axis,
  Grid,
  Tooltip,
  XYChart,
  buildChartTheme,
} from "@visx/xychart";
import dayjs from "dayjs";
import { formatPrice } from "../utils/misc";
import { BTC_YEARLY_FEE_DATA, XMR_YEARLY_FEE_DATA, Data } from "@/data";

const accessors = {
  xAccessor: (d: Data) => d.x,
  yAccessor: (d: Data) => d.y,
};

const BTC_COLOR = "#f6931a";
const XMR_COLOR = "#fa6800";

// @ts-expect-error
const theme = buildChartTheme({
  colors: [XMR_COLOR, BTC_COLOR],
  tickLength: 8,
});

export default function Chart() {
  return (
    <>
      <div className="flex items-center justify-center">
        <noscript>Enable Javascript to see the chart.</noscript>
      </div>
      <div className="relative">
        <XYChart
          height={500}
          xScale={{ type: "point" }}
          yScale={{ type: "linear" }}
          theme={theme}
        >
          <Axis
            orientation="bottom"
            tickFormat={(v: Date) => dayjs(v).format("DD/MM/YYYY")}
            numTicks={6}
          />
          <Grid columns={false} rows={false} numTicks={4} />
          <AreaSeries
            dataKey="XMR"
            curve={curveCardinal}
            data={XMR_YEARLY_FEE_DATA}
            {...accessors}
            fillOpacity={0.1}
          />
          <AreaSeries
            dataKey="BTC"
            curve={curveCardinal}
            data={BTC_YEARLY_FEE_DATA}
            {...accessors}
            fillOpacity={0.1}
          />
          <Tooltip
            snapTooltipToDatumX
            snapTooltipToDatumY
            showVerticalCrosshair
            showSeriesGlyphs
            showDatumGlyph
            renderTooltip={({ tooltipData }) => {
              if (!tooltipData) return "no data";

              const tooltip = { ...tooltipData.datumByKey };

              const xmrTooltip = tooltip["XMR"].datum as Data;
              const btcTooltip = tooltip["BTC"].datum as Data;

              const getColor = (key: "BTC" | "XMR") =>
                key === "BTC" ? "#f6931a" : "#fa6800";

              return (
                <div className="font-display text-sm">
                  <span className="inline-flex justify-center text-astro-gray-700 ">
                    {dayjs(btcTooltip.x).format("DD-MM-YYYY")}
                  </span>
                  <div>
                    <span style={{ color: getColor("BTC") }}>BTC:</span>
                    {formatPrice(btcTooltip.y)}
                  </div>
                  <div>
                    <span style={{ color: getColor("XMR") }}>XMR:</span>
                    {formatPrice(xmrTooltip.y)}
                  </div>
                </div>
              );
            }}
          />
        </XYChart>
        <div className="flex gap-4 items-center px-2 absolute top-2 left-5 ">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 bg-bitcoin"></div>
            <span>BTC</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 bg-monero"></div>
            <span>XMR</span>
          </div>
        </div>
      </div>
    </>
  );
}
