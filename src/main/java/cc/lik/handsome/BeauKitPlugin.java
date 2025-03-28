package cc.lik.handsome;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import run.halo.app.plugin.BasePlugin;
import run.halo.app.plugin.PluginContext;

/**
 * <p>插件主类，管理插件的生命周期。</p>
 * <p>此类必须是公开的，并且有一个公开的构造函数。</p>
 * <p>每个插件只允许有一个继承 {@link BasePlugin} 的主类。</p>
 *
 * @author guqing
 * @since 1.0.0
 */
@Slf4j
@Component
public class BeauKitPlugin extends BasePlugin {

    public BeauKitPlugin(PluginContext pluginContext) {
        super(pluginContext);
    }

    @Override
    public void start() {
        log.info("BeauKit插件启动成功！");
    }

    @Override
    public void stop() {
        log.info("BeauKit插件停止！");
    }
}
