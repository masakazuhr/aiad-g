"use client";

import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Lightbulb, PiggyBank, Users } from 'lucide-react'


export default function LandingPage() {
  // ヒーローセクション
  const HeroSection = () => (
    <section className="bg-gradient-to-r from-primary to-primary-foreground text-background py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">10万円から始められる<br />生成AIアドバイザー</h1>
          <p className="text-xl mb-8">豊富な事例と手厚いサポートで、貴社の生成AI導入を成功に導きます</p>
          <Button variant="secondary" size="lg" className="rounded-full">
            無料相談はこちら
          </Button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/images/AI Advisory01.png"
            alt="ビジネスパーソンと生成AI"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )

  // サービス紹介セクション
  const ServiceIntro = () => {
    const services = [
      {
        icon: <Lightbulb className="h-12 w-12 text-primary" />,
        title: "ニーズに合わせた情報提供",
        description: "貴社の課題に合わせて、最適な生成AI活用方法をご提案します。"
      },
      {
        icon: <PiggyBank className="h-12 w-12 text-primary" />,
        title: "圧倒的な低価格",
        description: "10万円からの料金設定で、中小企業でも導入しやすい価格帯を実現。"
      },
      {
        icon: <Users className="h-12 w-12 text-primary" />,
        title: "伴走型サポート",
        description: "導入後も継続的にサポートし、貴社の生成AI活用を成功に導きます。"
      }
    ]

    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">AI Advisory ならではの3つの強み</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-center">{service.icon}</div>
                  <CardTitle className="text-center">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-xl font-bold text-primary mb-4">今なら無料相談で、生成AI導入プランをプレゼント！</p>
            <Button variant="default" size="lg" className="rounded-full">
              無料相談を申し込む
            </Button>
          </div>
        </div>
      </section>
    )
  }

  // サポートコンテンツセクション
  const SupportContent = () => {
    const supportItems = [
      "導入コンサルティング",
      "ツール選定",
      "運用サポート",
      "カスタマイズ支援",
      "社内教育プログラム"
    ]

    const supportFlow = [
      { step: 1, title: "無料相談", description: "現状のヒアリングと課題の特定" },
      { step: 2, title: "プラン提案", description: "最適な導入プランのご提案" },
      { step: 3, title: "契約・導入", description: "契約締結とAIツールの導入" },
      { step: 4, title: "運用サポート", description: "継続的な運用支援と改善提案" },
    ]

    return (
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">貴社の課題に寄り添い、最適な生成AI導入をサポート</h2>
          <ul className="list-disc list-inside text-lg max-w-2xl mx-auto mb-12">
            {supportItems.map((item, index) => (
              <li key={index} className="mb-4">{item}</li>
            ))}
          </ul>
          <h3 className="text-2xl font-bold text-center mb-8">AI導入までの流れ</h3>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center max-w-4xl mx-auto">
            {supportFlow.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center mb-8 md:mb-0">
                <div className="w-16 h-16 bg-primary text-background rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  {step.step}
                </div>
                <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                <p className="text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // ユースケースと料金プランセクション
  const UseCaseAndPricing = () => {
    const useCases = [
      { industry: "製造業", challenge: "生産性向上", effect: "作業効率20%アップ" },
      { industry: "小売業", challenge: "接客品質改善", effect: "顧客満足度15%向上" },
      { industry: "金融業", challenge: "リスク分析", effect: "分析時間50%削減" },
      { industry: "医療機関", challenge: "診断支援", effect: "診断精度10%向上" },
    ]

    const pricingPlans = [
      { name: "ライトプラン", price: "10万円〜", features: ["初期導入サポート", "基本的な運用アドバイス"] },
      { name: "スタンダードプラン", price: "30万円〜", features: ["カスタマイズ支援", "定期的な運用レビュー"] },
      { name: "プレミアムプラン", price: "50万円〜", features: ["フルサポート", "24時間対応", "専任コンサルタント"] },
    ]

    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">様々な業界で導入実績多数！AI導入事例をご紹介</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {useCases.map((useCase, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{useCase.industry}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p><strong>課題：</strong>{useCase.challenge}</p>
                  <p><strong>導入効果：</strong>{useCase.effect}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-center mb-12">選べる3つのプラン</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`text-center ${index === 1 ? 'border-primary border-2' : ''}`}>
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <p className="text-2xl font-bold">{plan.price}</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-left">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
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

  // FAQとCTAセクション
  const FAQAndCTA = () => {
    const faqs = [
      {
        question: "生成AIの導入にはどれくらいの期間がかかりますか？",
        answer: "プロジェクトの規模や複雑さによって異なりますが、通常1〜3ヶ月程度です。"
      },
      {
        question: "導入後のサポート体制はどうなっていますか？",
        answer: "全てのプランで基本的な運用サポートを提供しています。より手厚いサポートが必要な場合は、上位プランをご検討ください。"
      },
      {
        question: "他社の成功事例は参考にできますか？",
        answer: "はい、類似業界や課題に関する成功事例を共有し、貴社の状況に合わせたアドバイスを提供します。"
      }
    ]

    return (
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">よくある質問</h2>
          <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-8">AI導入の第一歩を踏み出しましょう</h2>
            <Button variant="default" size="lg" className="rounded-full mb-8">
              無料相談を申し込む
            </Button>
            <p className="text-xl">お電話でのお問い合わせ：0120-XXX-XXX</p>
            <p className="text-xl">メールでのお問い合わせ：info@aiadvisory.com</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <div className="font-sans">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">AI Advisory</h1>
        </div>
      </header>
      <HeroSection />
      <ServiceIntro />
      <SupportContent />
      <UseCaseAndPricing />
      <FAQAndCTA />
      <footer className="bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 AI Advisory. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}