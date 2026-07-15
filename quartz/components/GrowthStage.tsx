import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

const stageConfig = {
  seed: { icon: "🌱", label: "Seed", title: "Early idea, incomplete" },
  budding: { icon: "🌿", label: "Budding", title: "Taking shape, may have gaps" },
  evergreen: { icon: "🌳", label: "Evergreen", title: "Mature, relatively stable" },
} as const

type Stage = keyof typeof stageConfig

function GrowthStage({ fileData }: QuartzComponentProps) {
  const stage = fileData.frontmatter?.["growth-stage"] as Stage | undefined
  if (!stage || !(stage in stageConfig)) return null

  const { icon, label, title } = stageConfig[stage]

  return (
    <span class="growth-stage" data-stage={stage} title={title}>
      {icon} {label}
    </span>
  )
}

GrowthStage.css = `
.growth-stage {
  display: inline-flex;
  align-items: center;
  gap: 0.25em;
  font-family: var(--codeFont);
  font-size: 0.75rem;
  padding: 0.2em 0.6em;
  border-radius: 999px;
  border: 1px solid var(--lightgray);
  color: var(--gray);
  vertical-align: middle;
  margin-left: 0.5em;
  white-space: nowrap;
}

[data-stage="seed"] { border-color: #b5c4a8; color: #6b8f5a; }
[data-stage="budding"] { border-color: #a8c4b5; color: #4a8f6b; }
[data-stage="evergreen"] { border-color: #7aaa86; color: #2d7a4a; background: rgba(122,170,134,0.08); }
`

export default (() => GrowthStage) satisfies QuartzComponentConstructor
