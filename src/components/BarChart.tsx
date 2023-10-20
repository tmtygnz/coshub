import { Group } from "@visx/group";
import { scaleBand, scaleLinear } from "@visx/scale";
import { Bar } from "@visx/shape";
import { useEffect, useMemo, useState } from "react";
import { ParentSize } from "@visx/responsive";
import { Text } from "@visx/text";

//! I can't understand any of this shit after i slept

export interface BarChartData {
  label: string;
  value: number;
}

// accessors
const getLabel = (d: BarChartData) => d.label;
const getValue = (d: BarChartData) => d.value * 100;

export const ElBarChart = ({
  data,
  width,
  height,
  vMargin = 0,
  onHover = () => {},
}: {
  data: Array<BarChartData>;
  width: number;
  height: number;
  vMargin?: number;
  hoverVal?: number;
  onHover?: (d: BarChartData) => void;
}) => {
  const [hoveringId, setHoveringId] = useState<number>(data.length - 1);
  const [dValue, setDValue] = useState<BarChartData>(data[hoveringId]);

  const xMax = width;
  const yMax = height - vMargin;

  const xScale = useMemo(
    () =>
      scaleBand<string>({
        range: [0, xMax],
        round: true,
        domain: data.map(getLabel),
        padding: 0.2,
      }),
    [data, xMax]
  );

  const yScale = useMemo(
    () =>
      scaleLinear<number>({
        range: [yMax, 0],
        round: true,
        domain: [
          Math.min(...data.map(getValue)) - 1,
          Math.max(...data.map(getValue)) + 1,
        ],
        nice: true,
      }),
    [data, yMax]
  );

  useEffect(() => {
    setDValue(data[hoveringId]);
    onHover(dValue);
  }, [hoveringId, data, dValue]);

  // const fillData = useMemo(() => {
  //   let average = data.reduce((acc, cum) => acc + cum.value, 0) / data.length;
  //   const orangeThreshold = average * 0.75;
  //   const redThreshold = average;
  //   return { average, orangeThreshold, redThreshold };
  // }, [data]);

  return (
    <svg
      height="100%"
      width="100%"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      style={{ overflow: "visible" }}
      onMouseLeave={() => {
        setHoveringId(data.length - 1);
      }}
    >
      <Group top={vMargin / 2} width={width} height={height} overflow={"clip"}>
        {data.map((d, i) => {
          const letter = getLabel(d);
          const bWidth = xScale.bandwidth();
          const bHeight = yMax - (yScale(getValue(d)) ?? 0);
          const barX = xScale(letter);
          const barY = yMax - bHeight;
          return (
            <>
              <Bar
                key={`sub-${letter}`}
                x={barX}
                y={barY}
                width={bWidth}
                height={bHeight}
                rx="5"
                ry="5"
                fill={hoveringId == i ? "#ff5d32" : "#d2d1d6"}
                onClick={() => console.log(data[i].value)}
              />
              <Group>
                <Text
                  x={barX! + bWidth / 2}
                  y={barY + bHeight + 15}
                  verticalAnchor="start"
                  textAnchor="middle"
                  fill={
                    i % 5 == 0
                      ? i + 1 == hoveringId || i - 1 == hoveringId
                        ? "transparent"
                        : ""
                      : hoveringId == i
                      ? ""
                      : "transparent"
                  }
                  fontSize={width / 56.0466667}
                >
                  {letter}
                </Text>
              </Group>
              <Bar
                key={`parent-${letter}`}
                x={barX}
                width={bWidth}
                fill="transparent"
                height={yMax}
                onMouseOver={() => {
                  setHoveringId(i);
                  onHover(d);
                }}
              />
            </>
          );
        })}
      </Group>
    </svg>
  );
};

export const BarChartResponsive = ({
  ...props
}: {
  data: Array<BarChartData>;

  vMargin?: number;
  onHover?: (d: BarChartData) => void;
}) => {
  return (
    <ParentSize>
      {({ width, height }) => (
        <ElBarChart width={width} height={height} {...props} />
      )}
    </ParentSize>
  );
};
