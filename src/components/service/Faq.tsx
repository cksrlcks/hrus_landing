import { ChevronDown } from "lucide-react";
import Inner from "../layout/Inner";
import {
  Accordion,
  AccordionContent,
  AccordionIcon,
  AccordionTrigger,
} from "../ui/Accordion";

const FAQ_DATA = [
  {
    id: 1,
    title: "HRUS의 성과관리 솔루션은 무엇이 다른가요?",
    content:
      "HRUS의 성과관리 솔루션은 직관적인 UI와 강력한 데이터 분석 기능을 제공하여, 팀의 목표 달성을 지원합니다. 또한, 사용자 맞춤형 설정이 가능하여 각 조직의 필요에 맞게 최적화할 수 있습니다.",
  },
  {
    id: 2,
    title: "HRUS의 성과관리 솔루션은 어떻게 시작하나요?",
    content:
      "HRUS의 성과관리 솔루션은 간단한 가입 절차를 통해 시작할 수 있습니다. 가입 후, 기본 설정을 완료하고 팀원들을 초대하면 바로 사용을 시작할 수 있습니다.",
  },
  {
    id: 3,
    title: "HRUS의 성과관리 솔루션은 어떤 기능을 제공하나요?",
    content:
      "HRUS의 성과관리 솔루션은 목표 설정, 진행 상황 추적, 피드백 제공, 성과 분석 등 다양한 기능을 제공합니다. 또한, 팀원 간의 협업을 촉진하는 도구도 포함되어 있습니다.",
  },
];

export default function Faq() {
  return (
    <div className="pb-12 md:pb-30">
      <Inner>
        <h3 className="mb-8 text-xl font-semibold lg:mb-15 lg:text-[28px]">
          자주묻는 질문들
        </h3>

        <ul>
          {FAQ_DATA.map((item) => (
            <li key={item.id}>
              <Accordion>
                <AccordionTrigger>
                  <div className="flex cursor-pointer items-center justify-between border-b border-gray-100 py-6 font-semibold md:py-9 md:text-lg">
                    <span>{item.title}</span>
                    <AccordionIcon>
                      <ChevronDown />
                    </AccordionIcon>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="bg-muted p-8 opacity-70 md:text-lg">
                    {item.content}
                  </div>
                </AccordionContent>
              </Accordion>
            </li>
          ))}
        </ul>
      </Inner>
    </div>
  );
}
