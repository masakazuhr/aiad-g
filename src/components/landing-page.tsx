'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Lightbulb, PiggyBank, Users, CheckCircle, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export function LandingPage() {
  // Hero Section
  const HeroSection = () => (
    <section className="bg-white text-blue-900 py-20">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            10万円から始められる<br />生成AIアドバイザー
          </h1>
          <p className="text-xl mb-8">
            豊富な事例と手厚いサポートで、<br />貴社の生成AI導入を成功に導きます
          </p>
          <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300">
            無料相談はこちら
          </Button>
        </div>
        <div className="lg:w-1/2">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="ビジネスパーソンと生成AI"
            width={600}
            height={400}
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  )

  // Service Intro Section
  const ServiceIntro = () => {
    const services = [
      {
        icon: <Lightbulb className="h-12 w-12 text-blue-600" />,
        title: "ニーズに合わせた情報提供",
        description: "貴社の課題に合わせて、最適な生成AI活用方法をご提案します。"
      },
      {
        icon: <PiggyBank className="h-12 w-12 text-blue-600" />,
        title: "圧倒的な低価格",
        description: "10万円からの料金設定で、中小企業でも導入しやすい価格帯を実現。"
      },
      {
        icon: <Users className="h-12 w-12 text-blue-600" />,
        title: "伴走型サポート",
        description: "導入後も継続的にサポートし、貴社の生成AI活用を成功に導きます。"
      }
    ]

    return (
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">AI Advisory ならではの3つの強み</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition duration-300">
                <CardContent className="flex flex-col items-center p-6">
                  {service.icon}
                  <h3 className="text-xl font-semibold mt-4 mb-2">{service.title}</h3>
                  <p className="text-center text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-xl font-semibold text-green-600 mb-4">
              今なら無料相談で、生成AI導入プランをプレゼント！
            </p>
            <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300">
              無料相談を申し込む
            </Button>
          </div>
        </div>
      </section>
    )
  }

  // Support Content Section
  const SupportContent = () => {
    const supportItems = [
      "導入コンサルティング",
      "ツール選定",
      "運用サポート",
      "社内教育支援",
      "効果測定・改善提案"
    ]

    const supportFlow = [
      { title: "無料相談", description: "貴社の課題をヒアリング" },
      { title: "提案", description: "最適な生成AI導入プランをご提案" },
      { title: "契約", description: "サービス内容・料金の確認" },
      { title: "導入支援", description: "ツール選定・セットアップのサポート" },
      { title: "運用サポート", description: "継続的な改善・最適化支援" }
    ]

    return (
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">貴社の課題に寄り添い、最適な生成AI導入をサポート</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-blue-50 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">支援内容</h3>
                <ul className="space-y-2">
                  {supportItems.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-blue-50 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">AI導入までの流れ</h3>
                <ol className="space-y-4">
                  {supportFlow.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold">{step.title}</h4>
                        <p className="text-sm text-gray-600">{step.description}</p>
                      </div>
                      {index < supportFlow.length - 1 && (
                        <ArrowRight className="h-5 w-5 text-blue-600 mx-2 mt-1" />
                      )}
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  // Use Case and Pricing Section
  const UseCaseAndPricing = () => {
    const useCases = [
      {
        industry: "製造業",
        challenge: "生産効率の向上",
        effect: "AIによる予測モデルの導入で、生産効率が20%向上"
      },
      {
        industry: "小売業",
        challenge: "顧客サービスの改善",
        effect: "AIチャットボットの導入で、問い合わせ対応時間が50%短縮"
      },
      {
        industry: "金融業",
        challenge: "リスク分析の精度向上",
        effect: "AI分析ツールの活用で、リスク予測精度が30%向上"
      }
    ]

    const pricingPlans = [
      {
        name: "スタータープラン",
        price: "10万円/月",
        features: ["初期導入サポート", "月1回の定例ミーティング", "メールサポート"]
      },
      {
        name: "スタンダードプラン",
        price: "30万円/月",
        features: ["初期導入サポート", "週1回の定例ミーティング", "電話・メールサポート", "カスタマイズ導入支援"]
      },
      {
        name: "プレミアムプラン",
        price: "50万円/月",
        features: ["フルサポート", "24時間365日サポート", "専任コンサルタント配置", "高度なAI開発支援"]
      }
    ]

    return (
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">様々な業界で導入実績多数！AI導入事例をご紹介</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{useCase.industry}</h3>
                  <p className="text-gray-600 mb-2">課題: {useCase.challenge}</p>
                  <p className="text-green-600 font-semibold">効果: {useCase.effect}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-center mb-12">選べる3つのプラン</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                  <p className="text-3xl font-bold text-blue-600 mb-4">{plan.price}</p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // FAQ and CTA Section
  const FAQAndCTA = () => {
    const faqs = [
      {
        question: "生成AIの導入にはどのくらいの期間がかかりますか？",
        answer: "導入の規模や複雑さによって異なりますが、通常1〜3ヶ月程度です。弊社のサポートにより、スムーズな導入をサポートいたします。"
      },
      {
        question: "どのような業種でも生成AIを活用できますか？",
        answer: "はい、ほとんどの業種で生成AIを活用できます。製造、小売、金融、医療など、様々な分野での導入実績があります。"
      },
      {
        question: "導入後のサポート体制はどうなっていますか？",
        answer: "導入後も継続的なサポートを提供しています。定期的なミーティングや、電話・メールでのサポート、さらに高度な課題にも対応いたします。"
      },
      {
        question: "生成AIの導入にはどのようなメリットがありますか？",
        answer: "業務効率の向上、コスト削減、新しい顧客体験の創出など、多くのメリットがあります。具体的な効果は業種や用途によって異なります。"
      }
    ]

    return (
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">よくある質問</h2>
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-6">生成AI導入の第一歩を踏み出しましょう</h2>
            <p className="text-xl mb-8">専門家が貴社の課題解決をサポートいたします</p>
            <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300">
              無料相談はこちら
            </Button>
            <p className="mt-4 text-gray-600">
              お電話でのお問い合わせ: 03-1234-5678
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <div className="font-sans">
      <HeroSection />
      <ServiceIntro />
      <SupportContent />
      <UseCaseAndPricing />
      <FAQAndCTA />
    </div>
  )
}