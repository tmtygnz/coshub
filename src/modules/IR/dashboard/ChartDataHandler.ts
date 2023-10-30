import { ChartData } from "../../../components/BarChart";
import { supabase } from "../../../lib/supabase";
import dayjs from "dayjs";

const fetchData = async () => {
  let page = 0;
  const pageSize = 5000;
  let allData: Array<{ quantity: number | null; date: string | null }> = [];
  let hasData = true;
  const dateRange: { start: Date; end: Date } = {
    end: new Date(),
    start: dayjs(new Date()).subtract(1, "month").toDate(),
  };
  while (hasData) {
    const { data, error } = await supabase
      .from("defects")
      .select("quantity, date")
      .range(page * pageSize, (page + 1) * pageSize - 1)
      .gte("date", dateRange.start.toISOString())
      .lte("date", dateRange.end.toISOString())
      .order("date", { ascending: false });

    if (error) {
      throw error;
    }

    if (data.length == 0) hasData = false;

    allData = allData.concat(data);
    ++page;
  }
  console.log("returning data");
  return allData;
};

const summarizeEncodes = async (
  data: Array<{ quantity: number | null; date: string | null }>
) => {
  const dateRange: { start: Date; end: Date } = {
    end: new Date(),
    start: dayjs(new Date()).subtract(1, "month").toDate(),
  };
  let indexDate = dateRange.start;
  const summarizedEncodes: Array<ChartData> = [];

  while (dayjs(indexDate).diff(dateRange.end, "day") != 1) {
    const defectsWithTheSameDate = data.filter((defect) =>
      dayjs(indexDate).isSame(defect.date, "day")
    );

    const howManyEncodes = defectsWithTheSameDate.length;
    summarizedEncodes.push({
      value: howManyEncodes,
      label: dayjs(indexDate).format("MM/DD"),
    });

    indexDate = dayjs(indexDate).add(1, "day").toDate();
  }
  const sum = summarizedEncodes.reduce((acc, dt) => acc + dt.value, 0);
  const average = sum / 31;
  const latestValue = summarizedEncodes[summarizedEncodes.length - 1].value;
  const percentageDifference = Math.ceil(
    ((latestValue - average) / average) * 100
  );

  const result = {
    summarizedEncodes,
    average,
    percentageDifference,
  };
  console.log("returning summedEnc");

  return result;
};

const summarizeDefects = async (
  data: Array<{ quantity: number | null; date: string | null }>
) => {
  const dateRange: { start: Date; end: Date } = {
    end: new Date(),
    start: dayjs(new Date()).subtract(1, "month").toDate(),
  };
  let indexDate = dateRange.start;
  const summarizedDefects: Array<ChartData> = [];

  while (dayjs(indexDate).diff(dateRange.end, "day") != 1) {
    const defectWithTheSameDate = data.filter((defect) =>
      dayjs(indexDate).isSame(defect.date, "day")
    );

    const quantitySum = defectWithTheSameDate.reduce(
      (acc, defect) => acc + defect.quantity!,
      0
    );

    summarizedDefects.push({
      value: quantitySum,
      label: dayjs(indexDate).format("MM/DD"),
    });

    indexDate = dayjs(indexDate).add(1, "day").toDate();
  }
  const sum = summarizedDefects.reduce((acc, dt) => acc + dt.value, 0);
  const average = sum / 31;
  const latestValue = summarizedDefects[summarizedDefects.length - 1].value;
  const percentageDifference = Math.ceil(
    ((latestValue - average) / average) * 100
  );

  return {
    summarizedDefects,
    average,
    percentageDifference,
  };
};

export const getNecessaryData = async () => {
  const pastMonthsData = await fetchData();
  const [sumDef, sumEnc] = await Promise.all([
    summarizeDefects(pastMonthsData),
    summarizeEncodes(pastMonthsData),
  ]);
  return {
    sumDef,
    sumEnc,
  };
};