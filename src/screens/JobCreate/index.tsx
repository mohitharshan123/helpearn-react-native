import AnimatedMultistep from "react-native-animated-multistep";
import { View } from "react-native";

import JobType from "./JobType";

const allSteps = [
  { name: "step 1", component: JobType },
  { name: "step 2", component: JobType },
  { name: "step 3", component: JobType },
  { name: "step 4", component: JobType },
];

const JobCreate = () => {
  const onNext = () => {
    console.log("Next");
  };

  const onBack = () => {
    console.log("Back");
  };

  const finish = (finalState) => {
    console.log(finalState);
  };

  return (
    <View style={{ flex: 1 }}>
      <AnimatedMultistep
        steps={allSteps}
        onFinish={finish}
        onBack={onBack}
        onNext={onNext}
        comeInOnNext="fadeInLeft"
        OutOnNext="fadeOutLeft"
        comeInOnBack="fadeInLeft"
        OutOnBack="fadeOutLeft"
      />
    </View>
  );
};

export default JobCreate;
