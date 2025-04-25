import { GraduationCap, Award, Trophy, Users } from "lucide-react";

const getAchievementIcon = (iconName) => {
  switch (iconName) {
    case "Award":
      return Award;
    case "Trophy":
      return Trophy;
    case "GraduationCap":
      return GraduationCap;
    default:
      return Users;
  }
};

const AchievementsCard = ({ achievements, batchYear }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Batch {batchYear} Achievements
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {achievements.map((achievement, index) => {
          const Icon = getAchievementIcon(achievement.icon);

          return (
            <div
              key={index}
              className="bg-blue-50 rounded-lg p-4 flex items-center transition-all hover:bg-blue-100"
            >
              <div className="rounded-full bg-blue-100 p-3 mr-4">
                <Icon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800">
                  {achievement.title}
                </h3>
                <p className="text-2xl font-bold text-blue-600">
                  {achievement.title === "Pass Percentage"
                    ? `${achievement.count}%`
                    : achievement.count}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsCard;
