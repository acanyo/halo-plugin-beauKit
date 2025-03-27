package cc.lik.handsome.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BaseConfig {
    private String title;
    private String gaoDeKey;
    private String gaoDeWebKey;
    private String describe;
    private String hsla;
    private String logoName;
    private String mapStyle;
}

