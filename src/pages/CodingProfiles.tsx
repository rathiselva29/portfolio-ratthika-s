import { Github, Linkedin, Instagram, ExternalLink } from "lucide-react";
import { StaggerContainer, FadeUp, TiltCard } from "../components/AnimationWrappers";

const profiles = [
  {
    name: "GitHub",
    icon: Github,
    description: "Open source contributions, projects, and code repositories.",
    url: "https://github.com/rathiselva29",
    username: "@rathiselva29",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    description: "Professional network, career updates, and connections.",
    url: "https://www.linkedin.com/in/ratthika-s29",
    username: "Ratthika S",
  },
  {
    name: "Instagram",
    icon: Instagram,
    description: "Creative designs, behind-the-scenes, and personal updates.",
    url: "https://www.instagram.com/rathii__selva",
    username: "@rathii__selva",
  },
  {
    name: "Naukri",
    icon: ExternalLink,
    description: "Job profile, resume, and career opportunities.",
    url: "https://www.naukri.com",
    username: "Ratthika S",
  },
];

const CodingProfiles = () => (
  <section className="min-h-screen py-24 px-4">
    <div className="container mx-auto max-w-3xl">
      <StaggerContainer className="flex flex-col items-center mb-16">
        <FadeUp>
          <h1 className="section-title text-center">
            My <span className="gradient-text">Profiles</span>
          </h1>
        </FadeUp>
        <FadeUp>
          <p className="section-subtitle text-center">Connect with me on these professional platforms.</p>
        </FadeUp>
      </StaggerContainer>

      <StaggerContainer className="grid sm:grid-cols-2 gap-5">
        {profiles.map((profile) => (
          <FadeUp key={profile.name}>
            <TiltCard>
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card-hover p-6 flex flex-col gap-3 h-full block"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, hsl(190 90% 50% / 0.15), hsl(270 60% 55% / 0.15))" }}
                  >
                    <profile.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">{profile.name}</h3>
                    <span className="text-xs text-muted-foreground font-mono">{profile.username}</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">{profile.description}</p>
              </a>
            </TiltCard>
          </FadeUp>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default CodingProfiles;
