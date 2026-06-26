"use client"
import * as React from "react"
import { RiArrowUpLine, RiDownloadLine, RiLineChartLine, RiRocketLine, RiStoreLine, RiVipCrownLine } from 'react-icons/ri'
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import Financial_invest_time_yearrev from "../../../components/financial_invest_time_yearrev"
import Finacialrevenuestreams from "../../../components/finacialrevenuestreams"
import Fiancial_pricingstrategy from "../../../components/fiancial_pricingstrategy"
import Financial_breakevenanalysis from "../../../components/financial_breakevenanalysis"
import Fianacial_fundingrequirements from "../../../components/fianacial_fundingrequirements"
import { MdOutlineMonetizationOn } from "react-icons/md"
import { GrDeliver } from "react-icons/gr"
export const description = "An interactive bar chart"
const chartData = [
  { date: "2024-04-01", desktop: 222, mobile: 150 },
  { date: "2024-04-02", desktop: 97, mobile: 180 },
  { date: "2024-04-03", desktop: 167, mobile: 120 },
  { date: "2024-04-04", desktop: 242, mobile: 260 },
  { date: "2024-04-05", desktop: 373, mobile: 290 },
  { date: "2024-04-06", desktop: 301, mobile: 340 },
  { date: "2024-04-07", desktop: 245, mobile: 180 },
  { date: "2024-04-08", desktop: 409, mobile: 320 },
  { date: "2024-04-09", desktop: 59, mobile: 110 },
  { date: "2024-04-10", desktop: 261, mobile: 190 },
  { date: "2024-04-11", desktop: 327, mobile: 350 },
  { date: "2024-04-12", desktop: 292, mobile: 210 },
  { date: "2024-04-13", desktop: 342, mobile: 380 },
  { date: "2024-04-14", desktop: 137, mobile: 220 },
  { date: "2024-04-15", desktop: 120, mobile: 170 },
  { date: "2024-04-16", desktop: 138, mobile: 190 },
  { date: "2024-04-17", desktop: 446, mobile: 360 },
  { date: "2024-04-18", desktop: 364, mobile: 410 },
  { date: "2024-04-19", desktop: 243, mobile: 180 },
  { date: "2024-04-20", desktop: 89, mobile: 150 },
  { date: "2024-04-21", desktop: 137, mobile: 200 },
  { date: "2024-04-22", desktop: 224, mobile: 170 },
  { date: "2024-04-23", desktop: 138, mobile: 230 },
  { date: "2024-04-24", desktop: 387, mobile: 290 },
  { date: "2024-04-25", desktop: 215, mobile: 250 },
  { date: "2024-04-26", desktop: 75, mobile: 130 },
  { date: "2024-04-27", desktop: 383, mobile: 420 },
  { date: "2024-04-28", desktop: 122, mobile: 180 },
  { date: "2024-04-29", desktop: 315, mobile: 240 },
  { date: "2024-04-30", desktop: 454, mobile: 380 },
  { date: "2024-05-01", desktop: 165, mobile: 220 },
  { date: "2024-05-02", desktop: 293, mobile: 310 },
  { date: "2024-05-03", desktop: 247, mobile: 190 },
  { date: "2024-05-04", desktop: 385, mobile: 420 },
  { date: "2024-05-05", desktop: 481, mobile: 390 },
  { date: "2024-05-06", desktop: 498, mobile: 520 },
  { date: "2024-05-07", desktop: 388, mobile: 300 },
  { date: "2024-05-08", desktop: 149, mobile: 210 },
  { date: "2024-05-09", desktop: 227, mobile: 180 },
  { date: "2024-05-10", desktop: 293, mobile: 330 },
  { date: "2024-05-11", desktop: 335, mobile: 270 },
  { date: "2024-05-12", desktop: 197, mobile: 240 },
  { date: "2024-05-13", desktop: 197, mobile: 160 },
  { date: "2024-05-14", desktop: 448, mobile: 490 },
  { date: "2024-05-15", desktop: 473, mobile: 380 },
  { date: "2024-05-16", desktop: 338, mobile: 400 },
  { date: "2024-05-17", desktop: 499, mobile: 420 },
  { date: "2024-05-18", desktop: 315, mobile: 350 },
  { date: "2024-05-19", desktop: 235, mobile: 180 },
  { date: "2024-05-20", desktop: 177, mobile: 230 },
  { date: "2024-05-21", desktop: 82, mobile: 140 },
  { date: "2024-05-22", desktop: 81, mobile: 120 },
  { date: "2024-05-23", desktop: 252, mobile: 290 },
  { date: "2024-05-24", desktop: 294, mobile: 220 },
  { date: "2024-05-25", desktop: 201, mobile: 250 },
  { date: "2024-05-26", desktop: 213, mobile: 170 },
  { date: "2024-05-27", desktop: 420, mobile: 460 },
  { date: "2024-05-28", desktop: 233, mobile: 190 },
  { date: "2024-05-29", desktop: 78, mobile: 130 },
  { date: "2024-05-30", desktop: 340, mobile: 280 },
  { date: "2024-05-31", desktop: 178, mobile: 230 },
  { date: "2024-06-01", desktop: 178, mobile: 200 },
  { date: "2024-06-02", desktop: 470, mobile: 410 },
  { date: "2024-06-03", desktop: 103, mobile: 160 },
  { date: "2024-06-04", desktop: 439, mobile: 380 },
  { date: "2024-06-05", desktop: 88, mobile: 140 },
  { date: "2024-06-06", desktop: 294, mobile: 250 },
  { date: "2024-06-07", desktop: 323, mobile: 370 },
  { date: "2024-06-08", desktop: 385, mobile: 320 },
  { date: "2024-06-09", desktop: 438, mobile: 480 },
  { date: "2024-06-10", desktop: 155, mobile: 200 },
  { date: "2024-06-11", desktop: 92, mobile: 150 },
  { date: "2024-06-12", desktop: 492, mobile: 420 },
  { date: "2024-06-13", desktop: 81, mobile: 130 },
  { date: "2024-06-14", desktop: 426, mobile: 380 },
  { date: "2024-06-15", desktop: 307, mobile: 350 },
  { date: "2024-06-16", desktop: 371, mobile: 310 },
  { date: "2024-06-17", desktop: 475, mobile: 520 },
  { date: "2024-06-18", desktop: 107, mobile: 170 },
  { date: "2024-06-19", desktop: 341, mobile: 290 },
  { date: "2024-06-20", desktop: 408, mobile: 450 },
  { date: "2024-06-21", desktop: 169, mobile: 210 },
  { date: "2024-06-22", desktop: 317, mobile: 270 },
  { date: "2024-06-23", desktop: 480, mobile: 530 },
  { date: "2024-06-24", desktop: 132, mobile: 180 },
  { date: "2024-06-25", desktop: 141, mobile: 190 },
  { date: "2024-06-26", desktop: 434, mobile: 380 },
  { date: "2024-06-27", desktop: 448, mobile: 490 },
  { date: "2024-06-28", desktop: 149, mobile: 200 },
  { date: "2024-06-29", desktop: 103, mobile: 160 },
  { date: "2024-06-30", desktop: 446, mobile: 400 },
]
const chartConfig = {
  views: {
    label: "Page Views",
  },
  desktop: {
    label: "Desktop",
    color: "var(--chart-2)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig
function page() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("desktop")
  const total = React.useMemo(
    () => ({
      desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
      mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
    }),
    []
  )
  return (
    <div className='min-h-screen p-5'>
      <div className='flex items-center justify-end'>
        <div className=''>
          <button className='flex items-center gap-1.5 py-3 px-6 bg-linear-to-br from-[#15ccbd] to-[#17b7d0] text-white font-semibold rounded-xl border'>
            <div className='font-bold text-md'>
              <RiDownloadLine />
            </div>
            <p className='font-semibold text-nowrap'>
              Export Financials
            </p>
          </button>
        </div>
      </div>
      <div className='my-4 grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4'>
        <Financial_invest_time_yearrev title={"$75,000"} description={"Initial Investment"} icon={<MdOutlineMonetizationOn />} color={'#B36AF8'}/>
        <Financial_invest_time_yearrev title={"18 months"} description={"Break-Even Point"} icon={<RiLineChartLine />} color={'#4AD07B'}/>
        <Financial_invest_time_yearrev title={"$125,000"} description={"Year 1 Revenue"} icon={<RiArrowUpLine/>} color={'#B36AF8'}/>
        <Financial_invest_time_yearrev title={"$1.2M"} description={"Year 3 Revenue"} icon={<RiRocketLine />} color={'#FA934C'}/>
      </div>
      <div className='rounded-2xl bg-white p-5 border '>
        <h1 className='font-bold'>Revenue Streams</h1>
        <div className='my-3 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3'>
          <Finacialrevenuestreams icon={<GrDeliver />} title={"Delivery Fees"} percentprogress={"45%"} price={"$56,250"} avg_order={"$3.99 per order average"}/>
          <Finacialrevenuestreams icon={<RiStoreLine />} title={"Restaurant Commission"} percentprogress={"35%"} price={"$43,750"} avg_order={"15% of order value"}/>
          <Finacialrevenuestreams icon={<RiVipCrownLine />} title={"Premium Subscription"} percentprogress={"20%"} price={"$25,000"} avg_order={"$9.99/month per user "}/>
        </div>
      </div>
      <div className='rounded-2xl bg-white p-5 my-4 border'>
        <h1 className='font-bold'>Pricing Strategy</h1>
        <div className='my-3 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3'>
          <Fiancial_pricingstrategy title={"Customer Pricing"} fee_rate={"Delivery Fee"} amount={"$3.99"} service_premium={"Service Fee"} amount_2={"10% of order"} premium_subscription={"Premium Subscribtion"} amount_3={"$9.99/month"} average={"Average Order Value"} amount_of_avg={"$35.00"} />
          <Fiancial_pricingstrategy title={"Restraunt Commission"} fee_rate={"Standard Rate"} amount={"15%"} service_premium={"Premium Partner"} amount_2={"12%"} premium_subscription={"New Restraunts (3 months)"} amount_3={"10%"} average={"Avg Commission/Order"} amount_of_avg={"$5.25"} />
        </div>
      </div>
      <div className='rounded-2xl bg-white p-5 my-4 border'>
        <h1 className='font-bold'>36-Month Revenue Projection</h1>
        <div className=''>
          <Card className="py-0">
            <CardHeader className="flex flex-col items-stretch border-b p-0! sm:flex-row">
              <div className="flex flex-1 flex-col justify-center gap-1 px-6 pt-4 pb-3 sm:py-0!">
                <CardTitle>Bar Chart - Interactive</CardTitle>
                <CardDescription>
                  Showing total visitors for the last 3 months
                </CardDescription>
              </div>
              <div className="flex">
                {["desktop", "mobile"].map((key) => {
                  const chart = key as keyof typeof chartConfig

                  return (
                    <button
                      key={chart}
                      data-active={activeChart === chart}
                      className="data-[active=true]:bg-muted/50 relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l sm:border-t-0 sm:border-l sm:px-8 sm:py-6"
                      onClick={() => setActiveChart(chart)}
                    >
                      <span className="text-muted-foreground text-xs">
                        {chartConfig[chart as keyof typeof chartConfig].label}
                      </span>
                      <span className="text-lg leading-none font-bold sm:text-3xl">
                        {total[key as keyof typeof total].toLocaleString()}
                      </span>
                    </button>
                  )
                })}
              </div>
            </CardHeader>
            <CardContent className="px-2 sm:p-6">
              <ChartContainer
                config={chartConfig}
                className="aspect-auto h-62.5 w-full"
              >
                <BarChart
                  accessibilityLayer
                  data={chartData}
                  margin={{
                    left: 12,
                    right: 12,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="date"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    minTickGap={32}
                    tickFormatter={(value) => {
                      const date = new Date(value)
                      return date.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })
                    }}
                  />
                  <ChartTooltip
                    content={
                      <ChartTooltipContent
                        className="w-37.5"
                        nameKey="views"
                        labelFormatter={(value) => {
                          return new Date(value).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })
                        }}
                      />
                    }
                  />
                  <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className='rounded-2xl bg-white p-5 my-5 border'>
        <h1 className='font-bold'>Break Even Analysis</h1>
        <div className='my-3 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3'>
          <Financial_breakevenanalysis title={"Fixed Costs (Monthly)"} tech_delivery={"Technology & Platform"} amount_1={"2,500"} marketing_pakaging={"Marketing"} amount_2={"3,500"} operations_payment={"Operatons"} amount_3={"2,800"} administrative_insurance={"Administrative"} amount_4={"1,200"} total={"Total Fixed"} total_amount={"$10,000"} />
          <Financial_breakevenanalysis title={"Variable Costs (Per Order)"} tech_delivery={"Delivery Driver"} amount_1={"2.50"} marketing_pakaging={"Packaging"} amount_2={"0.75"} operations_payment={"Payment Processing"} amount_3={"0.45"} administrative_insurance={"Insurance"} amount_4={"0.30"} total={"Total Variable"} total_amount={"$4.00"} />
        </div>
        <div className='flex justify-between items-center rounded-2xl shadow-md p-4 border border-[#97f0c4] bg-[#eafaf2]'>
          <div className=''>
            <h1 className='font-bold text-sm'>Break-Even Point</h1>
            <p className='text-sm text-gray-500 font-semibold mt-2'>Orders needed per month to cover costs</p>
          </div>
          <div>
            <h1 className='text-3xl font-bold text-[#16A34A]'>2,500</h1>
            <p className='text-[11px] font-semibold flex justify-end text-gray-500 '>orders/month</p>
          </div>
        </div>
      </div>
      <div>
        <Fianacial_fundingrequirements  />
      </div>

    </div>
  )
}

export default page